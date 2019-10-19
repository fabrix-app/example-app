'use strict'

const assert = require('assert')
const supertest = require('supertest')

describe('Controllers', () => {
  let request
  before(() => {
    request = supertest('http://localhost:3000/api/v1')
  })
  describe('DefaultController', () => {
    describe('info', () => {
      it('should return {app: \'1.6.0\'} on GET /default/info', (done) => {
        request
          .get('/default/info')
          .expect(200)
          .end((err, res) => {
            console.log(err)
            const data = res.body
            assert.equal(data.app, '1.6.0')
            done(err)
          })
      })
    })
  })
})
