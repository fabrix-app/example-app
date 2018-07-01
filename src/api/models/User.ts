import { FabrixModel as Model } from '@fabrix/fabrix/dist/common'

/**
 * @module User
 * @description User account object
 */
export class User extends Model {

  static config(app, Sequelize) {
    return {
      options: { }
    }
  }

  static schema (app, Sequelize) {
    return {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  }

  associate(models) {
    models.User.hasMany(models.WebToken, {
      as: 'web_tokens',
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true
      }
    })
  }
}
