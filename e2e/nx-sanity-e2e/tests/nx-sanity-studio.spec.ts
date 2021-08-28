import {
    checkFilesExist,
    ensureNxProject,
    readJson,
    runNxCommandAsync,
    uniq,
  } from '@nrwl/nx-plugin/testing';

  beforeAll(async() => {
    const plugin = uniq('nx-sanity');
    ensureNxProject('@otio/nx-sanity', 'dist/packages/nx-sanity');
    await runNxCommandAsync(`generate @otio/nx-sanity:nx-sanity ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');
  })
  
  describe('nx-sanity e2e', () => {
    // it('should create nx-sanity', async () => {
    //   const plugin = uniq('nx-sanity');
    //   ensureNxProject('@otio/nx-sanity', 'dist/packages/nx-sanity');
    //   await runNxCommandAsync(`generate @otio/nx-sanity:nx-sanity ${plugin}`);
  
    //   const result = await runNxCommandAsync(`build ${plugin}`);
    //   expect(result.stdout).toContain('Executor ran');
    // }, 120000);
  
    // describe('--directory', () => {
    //   it('should create src in the specified directory', async () => {
    //     const plugin = uniq('nx-sanity');
    //     ensureNxProject('@otio/nx-sanity', 'dist/packages/nx-sanity');
    //     await runNxCommandAsync(
    //       `generate @otio/nx-sanity:nx-sanity ${plugin} --directory subdir`
    //     );
    //     expect(() =>
    //       checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
    //     ).not.toThrow();
    //   }, 120000);
    // });
  
    // 

  });
  
// import {
//     checkFilesExist,
//     ensureNxProject,
//     readJson,
//     runNxCommandAsync,
//     uniq,
//   } from '@nrwl/nx-plugin/testing';

// import { readWorkspaceConfiguration, Tree } from '@nrwl/devkit';
// import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
// // import reactInitGenerator from './init';
// // import { InitSchema } from './schema';


  
// describe('Initialize Sanity Studio Application Project', () => {

//   let appTree: Tree;
//   let schema: Schema = {
//     babelJest: false,
//     e2eTestRunner: 'cypress',
//     skipFormat: false,
//     unitTestRunner: 'jest',
//     name: 'myApp',
//     linter: Linter.EsLint,
//     style: 'css',
//     strict: false,
//     standaloneConfig: false,
//   };

//   beforeEach(() => {
//     appTree = createTreeWithEmptyWorkspace();
//   });

//   // beforeEach(async () => {
//   //   const plugin = uniq('nx-sanity');
//   //   ensureNxProject('@otio/nx-sanity', 'dist/packages/nx-sanity');
//   //   await runNxCommandAsync(`generate @otio/nx-sanity:nx-sanity ${plugin}`);
//   // })

//   // it('should create a sanity studio app', async () => { 
//   //   const result = await runNxCommandAsync(`build ${plugin}`);
//   //   expect(result.stdout).toContain('Executor ran');
//   // }, 120000);

// });

// describe('init', () => {
//   let tree: Tree;
//   let schema: InitSchema = {
//     // unitTestRunner: 'jest',
//     // e2eTestRunner: 'cypress',
//     // skipFormat: false,
//   };

//   beforeEach(() => {
//     tree = createTreeWithEmptyWorkspace();
//   });

//   it('should add @sanity/cli dependencies', async () => {
//     await reactInitGenerator(tree, schema);
//     const packageJson = readJson(tree, 'package.json');
//     expect(packageJson.dependencies['react']).toBeDefined();
//     expect(packageJson.dependencies['react-dom']).toBeDefined();
//     expect(packageJson.devDependencies['@types/react']).toBeDefined();
//     expect(packageJson.devDependencies['@types/react-dom']).toBeDefined();
//     expect(packageJson.devDependencies['@testing-library/react']).toBeDefined();
//   });

//   // describe('defaultCollection', () => {
//   //   it('should be set if none was set before', async () => {
//   //     await reactInitGenerator(tree, schema);
//   //     const workspace = readWorkspaceConfiguration(tree);
//   //     expect(workspace.cli.defaultCollection).toEqual('@nrwl/react');
//   //     expect(workspace.generators['@nrwl/react'].application.babel).toBe(true);
//   //   });
//   // });

//   // it('should not add jest config if unitTestRunner is none', async () => {
//   //   await reactInitGenerator(tree, { ...schema, unitTestRunner: 'none' });
//   //   expect(tree.exists('jest.config.js')).toEqual(false);
//   // });

// });