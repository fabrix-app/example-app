/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://fabrix.app/doc/config/web}
 */
export const web = {

  express: require('express'),
  middlewares: {
    order: [
      'static',
      'addMethods',
      'cookieParser',
      'session',
      'bodyParser',
      'methodOverride',
      'router',
      'www',
      '404',
      '500'
    ],
    // static: require('express').static('www/public')
  },

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 3000
}
