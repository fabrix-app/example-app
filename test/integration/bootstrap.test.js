const FabrixApp = require('@fabrix/fabrix').FabrixApp
const App = require('../../dist')
const app = new FabrixApp(App)

before(done => {
  return app.start().catch(app.stop)
})

after(() => {
  return global.app.stop()
})
