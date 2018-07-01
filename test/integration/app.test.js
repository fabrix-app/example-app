const assert = require('assert')

describe('Fabrix Application', () => {

  it('is running', () => {
    assert.ok(global.fabrix)
    assert(global.fabrix.state.initialized)
  })

})
