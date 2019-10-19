import { FabrixApp } from '@fabrix/fabrix'
import { FabrixModel as Model } from '@fabrix/fabrix/dist/common'
import { SequelizeResolver } from '@fabrix/spool-sequelize'


export class WebtokenResolver extends SequelizeResolver {

}

/**
 * @module WebToken
 * @description JWT Waterline Model
 */
export class WebToken extends Model {

  static get resolver () {
    return WebtokenResolver
  }

  static config(app: FabrixApp, Sequelize) {
    return {
      options: {}
    }
  }

  static schema (app: FabrixApp, Sequelize) {
    return {
      issuer: {
        type: Sequelize.STRING
      },
      expiration: {
        type: Sequelize.DATE,
        /*
        defaultsTo () {
          const SECONDS_IN_YEAR = 3.154e7
          return new Date(Date.now() + SECONDS_IN_YEAR)
        }
        */
      },
      scopes: {
        type: Sequelize.JSONB
      },
      subject: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      }
    }
  }

  static associate(models) {
    models.WebToken.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true
      }
    })
  }
}

