/**
 * Spool Configuration
 * (app.config.main)
 *
 * @see http://fabrix.app/doc/config/main
 */
import { REPLSpool } from '@fabrix/spool-repl'
import { RouterSpool } from '@fabrix/spool-router'
import { SequelizeSpool } from '@fabrix/spool-sequelize'
import { HapiSpool } from '@fabrix/spool-hapi'
import { WinstonSpool } from '@fabrix/spool-winston'


export const main = {

  /**
   * Order can matter for spools that have conflicting api resource namespaces or configuration
   * Spools loaded last will take priority over spools loaded before.
   * This order does not effect the lifecycle of the spools which will be loaded according to their config.
   */
  spools: [
    // Spool for REPL
    REPLSpool,
    // Spool for Winston as a log transport
    // WinstonSpool,
    // Spool for Router
    RouterSpool,
    // Spool for Hapi Webserver
    HapiSpool,
    // Spool for Sequelize ORM
    SequelizeSpool
  ],

  paths: {
    root: __dirname + '../'
  }
}
