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
import { RepositoryOptions } from './repository.schema';

export function main(options: RepositoryOptions): Rule {
  options = transform(options);

  return (tree: Tree, context: SchematicContext) => {
      return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        mergeWith(generate(options)),
      ])
    )(tree, context);
  }
}

function transform(options: RepositoryOptions): RepositoryOptions {
  const target: RepositoryOptions = Object.assign({}, options);
  if (!target.name) {
    throw new SchematicsException('Option (name) is required.');
  }
  const location: Location = new NameParser().parse(target);
  target.name = normalizeToKebabOrSnakeCase(location.name);
  target.path = normalizeToKebabOrSnakeCase(location.path);

  target.path = target.flat
  ? target.path
  : join(target.path as Path, target.name);

  return target;
}

function generate(options: RepositoryOptions): Source {
  return (context: SchematicContext) => {
    // console.log(options);
    // console.log(context);
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
