/**
 * Logging Configuration
 * (app.config.log)
 * include spool-winston in config.main.spools
 * @see http://fabrix.app/doc/config/log
 */

import * as winston from 'winston'

export const log = {
  level: 'silly',
  transports: [
    new winston.transports.Console({
      // prettyPrint: false,
      // colorize: false
    })
  ]
}
