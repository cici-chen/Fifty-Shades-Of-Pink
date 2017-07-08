const express = require('express')
const router = express.Router()

const dbFunctions = require('../db/db_functions')

//url is set as having api/v1 as prefix

//this is not being used by app, but it's a nice way for me to see the table
router.get('/users',function(req,res){
  let db=req.app.get('knex-database')
  dbFunctions.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

router.get('/users/newest',function(req,res){
  let db=req.app.get('knex-database')
  dbFunctions.getUsers(db)
    .then(users=>{
      let index=users.length-1
      res.json(users[index])
    })
})

router.post('/users', (req,res)=>{
  let db=req.app.get('knex-database')
  dbFunctions.saveUser(req.body, db)
    .then((result)=>{
      res.status(201)
      res.send(req.body)
    })
})

router.post('/users/friend', (req,res)=>{
  let db=req.app.get('knex-database')
  dbFunctions.saveFriend(req.body, db)
    .then((result)=>{
      res.status(201)
      res.send(req.body)
    })
})

router.get('/users/friend/:userid', (req,res)=>{
  let db=req.app.get('knex-database')
  dbFunctions.getFriend(req.params.userid, db)
    .then((result)=>{
      res.status(200)
      res.json(result)
    })
})

router.get('/stories', function(req,res){
  let db=req.app.get('knex-database')
  dbFunctions.getStories(db)
    .then((stories) => {
      res.json(stories)
    })
}
)

router.get('/headers', function(req,res){
  let db=req.app.get('knex-database')
  dbFunctions.getHeader((req.query.url),db)
    .then(result=>{
      res.json(result.header)
    })
} )

module.exports = router
