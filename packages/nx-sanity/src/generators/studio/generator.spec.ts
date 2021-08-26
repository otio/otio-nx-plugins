import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { StudioGeneratorSchema } from './schema';

describe('studio generator', () => {
  let appTree: Tree;
  const options: StudioGeneratorSchema = { project: 'studio-test' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'studio-test');
    expect(config).toBeDefined();
  })
});
