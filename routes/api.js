let express = require('express')
let db = require('../models')
let Student = db.Students

let router = express.Router()

router.get('/Students', function (req,
                                  res,
                                  next){
    Student.findAll().then(students => {
        return res.json(students)
    })
})

router.post('/Students', function (req,res,next){
    Student.create( req.body ).then(data => {
        return res.status(201).send('ok')
    })
})

module.exports = router