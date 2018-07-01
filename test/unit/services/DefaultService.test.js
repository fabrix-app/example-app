const assert = require('assert')
const DefaultService = require('../../../dist/api/services/DefaultService').DefaultService

/**
 * DefaultService Unit Tests
 */
describe('DefaultService', () => {
  it('should exist', () => {
    assert(DefaultService)
  })

  describe('#getApplicationInfo', () => {
    it.skip('should return application info', () => {
      const info = DefaultService.getApplicationInfo({ })

      assert(info)
    })
  })
})
