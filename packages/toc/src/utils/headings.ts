// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Cell } from '@jupyterlab/cells';

/**
 * Interface describing a heading.
 *
 * @private
 */
interface IHeading {
  /**
   * Heading text.
   */
  text: string;

  /**
   * HTML heading level.
   */
  level: number;

  /**
   * Callback invoked upon clicking a ToC item.
   *
   * ## Notes
   *
   * -   This will typically be used to scroll the parent widget to this item.
   */
  onClick: () => void;

  /**
   * Special HTML markup.
   *
   * ## Notes
   *
   * -   The HTML string **should** be properly **sanitized**!
   * -   The HTML string can be used to render Markdown headings which have already been rendered as HTML.
   */
  html?: string;
}

/**
 * Interface describing a numbered heading.
 *
 * @private
 */
interface INumberedHeading extends IHeading {
  /**
   * Heading numbering.
   */
  numbering?: string | null;
}

/**
 * Interface describing a notebook cell heading.
 *
 * @private
 */
interface INotebookHeading extends INumberedHeading {
  /**
   * Heading type.
   */
  type: 'header' | 'markdown' | 'code';

  /**
   * Reference to a notebook cell.
   */
  cellRef: Cell;

  /**
   * Heading prompt.
   */
  prompt?: string;

  /**
   * Boolean indicating whether a heading has a child node.
   */
  hasChild?: boolean;

  /**
   * index of reference cell in the notebook
   */
  index: number;
}

/**
 * Tests whether a heading is a notebook heading.
 *
 * @param heading - heading to test
 * @returns boolean indicating whether a heading is a notebook heading
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const isNotebookHeading = (heading: any): boolean => {
  return heading.type !== undefined && heading.cellRef !== undefined;
};

/**
 * Exports.
 */
export { IHeading };
export { INumberedHeading };
export { INotebookHeading };
export { isNotebookHeading };
