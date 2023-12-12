# Getting Started With Schematics

This is schematics (aka generators) to assist creating Ghost's HTTP API.

To get started locally use:
```
yarn link "ghost-schematics"

nest g -c ghost-schematics --flat entity Snippet
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally:
```bash
yarn global add @angular-devkit/schematics-cli
```

Use the `schematics` command line tool. That tool acts the same as the `generate` command of the Nest CLI / Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
