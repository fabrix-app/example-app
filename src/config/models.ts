/**
 * Models Configuration
 * (app.config.models)
 *
 * Configure the model defaults
 *
 * @see {@link http://fabrix.app/doc/config/models}
 */
export const models = {
  /**
   * The default store used by models if not provided on the model definition
   */
  defaultStore: 'dev',
  /**
   * The default migration setting to use if not provided on the store or model definition
   */
  migrate: 'alter'
}
