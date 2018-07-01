import { FabrixModel as Model } from '@fabrix/fabrix/dist/common'

/**
 * @module WebToken
 * @description JWT Waterline Model
 */
export class WebToken extends Model {
  static config(app, Sequelize) {
    return {
      options: {}
    }
  }

  static schema (app, Sequelize) {
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

  associate(models) {
    models.WebToken.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true
      }
    })
  }
}

