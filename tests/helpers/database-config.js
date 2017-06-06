var knex = require('knex')
//require the test environment in knexlife
var config = require('../../knexfile').test

module.exports = (test, createServer) => {
  // Create a separate in-memory database before each test.
  // In our tests, we can get at the database as `t.context.connection`.
  test.beforeEach(function(t){
    t.context.connection=knex(config)
    if(createServer) t.context.app = createServer(t.context.connection)
    return t.context.connection.migrate.latest()
      .then(function(){
        return t.context.connection.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function(t){
    t.context.connection.destroy()
  })
}