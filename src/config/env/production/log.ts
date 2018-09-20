/**
 * Logging Configuration
 * (app.config.log)
 * include spool-winston in config.main.spools
 * @see http://fabrix.app/doc/config/log
 */


import * as winston from 'winston'

export const log = {
  level: 'info',
  // transports: [
  //   new winston.transports.Console({
  //     prettyPrint: false,
  //     colorize: false
  //   }),
  //   new winston.transports.File({
  //     name: 'info-file',
  //     level: 'info',
  //     filename: 'fabrix-info.log',
  //     timestamp: true
  //   }),
  //   new winston.transports.File({
  //     name: 'error-file',
  //     level: 'error',
  //     filename: 'fabrix-error.log',
  //     timestamp: true
  //   })
  // ]
}
