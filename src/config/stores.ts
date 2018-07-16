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
  // dev: {
  //   orm: 'sequelize',
  //   migrate: 'drop',
  //   database: 'Sequelize',
  //   host: '127.0.0.1',
  //   dialect: 'postgres'
  // }
}
