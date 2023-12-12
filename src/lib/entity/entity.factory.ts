import { join, Path, strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Source,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { normalizeToKebabOrSnakeCase } from '../../utils/formatting';
import { Location, NameParser } from '../../utils/name.parser';
import { mergeSourceRoot } from '../../utils/source-root.helpers';
import { EntityOptions } from './entity.schema';

export function main(options: EntityOptions): Rule {
  options = transform(options);

  return chain([mergeSourceRoot(options), mergeWith(generate(options))]);
}

function transform(options: EntityOptions): EntityOptions {
  const target = Object.assign({}, options);
  if (!target.name) {
    throw new SchematicsException('Option (name) is required.');
  }
  const location: Location = new NameParser().parse(target);
  target.name = normalizeToKebabOrSnakeCase(location.name);
  target.path = normalizeToKebabOrSnakeCase(location.path);

  target.path = target.flat
  ? target.path
  : join(target.path as Path, target.name);

  if(!target.path) {
    throw new SchematicsException('Option (path) is required.');
  }

  return target;
}

function generate(options: {path: string}): Source {
  return (context: SchematicContext) => {
    // console.log(options);
    // console.log(context);

    console.log('template tree: ', url('./files'));

    console.log('strings: ', strings);

    console.log('path: ', options.path);
    return apply(url('./files'), [
      template({
        ...strings,
        ...options,
        lowercased: (name: string) => {
          const classifiedName = strings.classify(name);
          return (
            classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
          );
        },
      }),
      move(options.path),
    ])(context);
  }
}
