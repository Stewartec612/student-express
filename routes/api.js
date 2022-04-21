let express = require('express')
let db = require('../models')
let Student = db.Student

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

//todo delete function
router.patch('/Students/:id',function (req,res,next){
    let studentID = req.parameters.id
    let updateStudent = req.body
    Student.update(updateStudent, {where: {id: studentID} } ).then( () => {
        return res.send('ok')
    })
})

router.delete('/students/:id',function (req,res,next){
    let studentID = req.parameters.id
    Student.destroy( {where: {id: studentID} }).then( () =>{
        return res.send('ok')
    })
})

module.exports = router
//all type under here will bne ignored