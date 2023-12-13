import { Path } from '@angular-devkit/core';

export interface EntityOptions {
  /**
   * The name of the entity.
   */
  name: string;

  /**
   * The name of the interface entity implements.
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
