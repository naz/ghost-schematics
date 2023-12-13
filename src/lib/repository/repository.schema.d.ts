import { Path } from '@angular-devkit/core';

export interface RepositoryOptions {
  /**
   * The name of the repository.
   */
  name: string;

  /**
   * The name of the interface repository implements.
   */
  interfaceName?: string;
  /**
   * The path to create the repository.
   */
  path: string | Path;
  /**
   * The source root path
   */
  sourceRoot?: string;
  /**
   * Flag to indicate if a directory is created.
   */
  flat?: boolean;
}
