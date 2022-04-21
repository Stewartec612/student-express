let express = require('express')
let db = require('../models')
let Student = db.Student

let router = express.Router()

router.get('/Students', function (req,
                                  res,
                                  next){
    Student.findAll( {order: ['present','name']}).then(students => {
        return res.json(students)
    })
})

router.post('/Students', function (req,res,next){
    Student.create( req.body ).then(data => {
        return res.status(201).send('ok')
    }).catch(err => {
        //handle user errors (e.g. missing name/starID)
        if(err instanceof db.sequelize.ValidationError){
            //respond with 400 bad request code and
            let messages = err.errors.map(e => e.message)
            return res.status(400).json(messages)
        }
        //other-wise something unexpected went wrong(server error)
        return next(err)
    })
})

//todo delete function
router.patch('/Students/:id',function (req,res,next){
    let studentID = req.params.id
    let updateStudent = req.body
    Student.update(updateStudent, {where: {id: studentID} } ).then( (rowsModified) => {

        let numberOfRowsModified = rowsModified[0]//number of rows changed

        if (numberOfRowsModified === 1){//one row changed
            return res.send('ok')
        }
        //no rows found -no student found - return 404
        else{
            return res.status(404).json(['Student with that id not found'])
        }

    }).catch(err => {
        //if validation error, that's a bad request - example-modify student to have no name
        if (err instanceof db.sequelize.ValidationError){
            let messages = err.errors.map(e => e.message)
            return res.status(404).json(messages)
        }else {
            //other unexpected errors
            return next(err)
        }
    })
})

router.delete('/students/:id',function (req,res,next){
    let studentID = req.params.id
    Student.destroy( {where: {id: studentID} }).then ( (rowsModified) =>{
        if(rowsModified === 1) {
            return res.send('ok')
        }else{
            return res.status(404).json(['not found'])
        }
    })
})

module.exports = router
//all type under here will bne ignored