'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Car extends Model {
  person() {
    return this.hasOne('App/Models/Person')
  }

  parking() {
    return this.belongsTo('App/Models/Parking')
  }
}

module.exports = Car
