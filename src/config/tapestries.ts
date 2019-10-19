/**
 * Footprints Configuration
 * (app.config.footprints)
 *
 * Footprints are routes that are auto-generated from your model and controller
 * definitions in api/controllers and api/models.
 *
 * @see http://fabrix.app/doc/config/footprints
 */
export const tapestries = {

  /**
   * Generate routes for controller handlers.
   */
  controllers: true,
  /*
  controllers: {
    // ...
  }
  *

  /**
   * Generate conventional Create, Read, Update, and Delete (CRUD) routes for
   * each Model.
   */
  models: {
    options: {

      /**
       * The max number of objects to return by default. Can be overridden in
       * the request using the ?limit argument.
       */
      defaultLimit: 100,

      /**
       * Subscribe to changes on requested models via WebSocket
       * (support provided by spool-websocket)
       */
      watch: false,

      /**
       * Whether to populate all model associations by default (for "find")
       */
      populate: false
    },

    actions: {
      create: true,
      find: true,
      update: true,
      destroy: true,

      /**
       * Specify which "association" endpoints to activate.
       */
      createAssociation: false,
      findAssociation: false,
      updateAssociation: false,
      destroyAssociation: false
    }
  },

  /**
   * Prefix your tapestry routes
   */
  prefix: '/api/v1'
}
