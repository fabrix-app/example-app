/**
 * Routes Configuration
 * (fabrix.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://fabrix.app/doc/config/routes.js
 */
export const routes = [

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: 'GET',
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
