import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { EntityOptions } from './entity.schema';

// @NOTE: these tests need to be figured out!
// describe('Entity Factory', () => {
//   const runner: SchematicTestRunner = new SchematicTestRunner(
//     '.',
//     path.join(process.cwd(), 'src/collection.json'),
//   );

//   it('should manage name only', async () => {
//     const options: EntityOptions = {
//       name: 'foo',
//       flat: true,
//     };
//     const tree: UnitTestTree = await runner
//       .runSchematicAsync('class', options)
//       .toPromise();
//     const files: string[] = tree.files;

//     expect(
//       files.find((filename) => filename === '/foo.ts'),
//     ).not.toBeUndefined();
//     expect(tree.readContent('/foo.ts')).toEqual('export class Foo {}\n');
//   });

//   it('should manage name as a path', async () => {
//     const options: EntityOptions = {
//       name: 'bar/foo',
//       flat: false,
//     };
//     const tree: UnitTestTree = await runner
//       .runSchematicAsync('class', options)
//       .toPromise();
//     const files: string[] = tree.files;

//     expect(
//       files.find((filename) => filename === '/bar/foo/foo.ts'),
//     ).not.toBeUndefined();
//     expect(tree.readContent('/bar/foo/foo.ts')).toEqual(
//       'export class Foo {}\n',
//     );
//   });
// });
