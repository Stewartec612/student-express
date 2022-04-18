module.exports = (sequelize, DataTypes) => {

    let Student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING
        },

        starID: {
            type: DataTypes.STRING
        },

        present: {
            type: DataTypes.BOOLEAN
        }
    })

    Student.sync({force: true}).then( () => {
        console.log('Synced student table')
    })

    return Student
}