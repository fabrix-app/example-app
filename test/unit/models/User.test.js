/* global describe, it */

const assert = require('assert')

describe('User Model', () => {
  let User, user

  before(() => {
    User = global.app.models.User
  })

  it('should exist', () => {
    assert(global.app.api.models['User'])
    assert(User)
  })
  it('should create User', (done) => {
    User.create({
      username: 'test'
    })
      .then(_user => {
        user = _user

        assert.ok(user.id)
        assert.equal(user.username, 'test')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should findOne created User', (done) => {
    User.findOne({
      where: {
        username: 'test'
      }
    })
      .then(_user => {
        assert.equal(_user.id, user.id)
        assert.equal(_user.username, 'test')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should instance methods on created User', (done) => {
    user.save()
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should findAll created Users', (done) => {
    User.findAll({})
      .then(_users => {
        assert.ok(_users.find(u => u.id === user.id))
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should findAndCountAll created Users', (done) => {
    User.findAndCountAll({})
      .then(({rows, count}) => {
        assert.ok(rows.find(u => u.id === user.id))
        assert.ok(count)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should update created User', (done) => {
    User.update({ username: 'test2' }, { where: { id: user.id } })
      .then(_users => {
        return User.findByPk(user.id)
      })
      .then(_user => {
        assert.equal(_user.id, user.id)
        assert.equal(_user.username, 'test2')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('should destroy created User', (done) => {
    User.destroy({ where: {id: user.id}})
      .then(_users => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
