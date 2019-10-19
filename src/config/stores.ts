/**
 * Stores Configuration
 * (app.config.stores)
 *
 * Configure the ORM layers, connections, etc.
 *
 * @see {@link http://fabrix.app/doc/config/database}
 */
/**
 * Define the database stores. A store is typically a single database.
 *
 * Set production connection info in config/env/production/store.ts
 */
export const stores = {
  /**
   * Define a store called "dev" which uses Sequelize and SQLite3 to persist data.
   */
  dev: {
    /**
     * This specifies that we will be using spool-sequelize as the orm for this store reference
     */
    orm: 'sequelize',
    /**
     * The default migration strategy unless defined by the model config
     */
    migrate: 'drop',
    /**
     * The name of the database to use
     */
    database: 'Sequelize',
    /**
     * The host
     */
    host: '127.0.0.1',
    /**
     * The dialect to use for this sequelize store. eg. postgres, sqlite, mysql etc.
     */
    dialect: 'sqlite'
  }
}
