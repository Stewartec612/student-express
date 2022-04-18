let express = require('express')
let api_routes = require('./routes/api.js')

//create web app
let app = express()

//ability to handle json requests and convert data to java script
app.use(express.json())

app.use('/api', api_routes)
//start web server running
let server = app.listen(process.env.PORT || 3000, function (){
    console.log('express server running on port', server.address().port )
})