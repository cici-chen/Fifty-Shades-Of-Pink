const express = require('express')
const router = express.Router()

const dbFunctions = require('../db/db_functions')


router.get('/users/:id',function(req,res){
  let db=req.app.get('knex-database')
  dbFunctions.getUser(req.params.id, db)
    .then(userData => {
      res.json(userData)
    })
})

router.post('/users', (req,res)=>{
  let db=req.app.get('knex-database')
  dbFunctions.saveUser(req.body, db)
    .then((res)=> {
      dbFunctions.getUser(req.body.id, db)
        .then(userData => {
          res.json(userData)
        })
    })
})

module.exports = router
