/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint class-methods-use-this: 0 no-unused-vars: 0 */

import NotImplementedError from '../../utils/errors/not-implemented-error.js';

/**
 * Representation of an ORM database in AdminJS
 * @category Base
 *
 * @mermaid
 *   graph LR
 *   A[BaseDatabase] -->|has many| B(BaseResource)
 *   B --> |has many|C(BaseRecord)
 *   B --> |has many|D(BaseProperty)
 */
class BaseDatabase {
  constructor(database) {}

  /**
   * Checks if given adapter supports database provided by user
   *
   * @param  {any}  database    database provided in AdminJSOptions#databases array
   * @return {Boolean}          if given adapter supports this database - returns true
   */
  static isAdapterFor(database) {
    throw new NotImplementedError('BaseDatabase.isAdapterFor');
  }

  /**
   * returns array of all resources (collections/tables) in the database
   *
   * @return {BaseResource[]}
   */
  resources() {
    throw new NotImplementedError('BaseDatabase#resources');
  }
}
export default BaseDatabase;