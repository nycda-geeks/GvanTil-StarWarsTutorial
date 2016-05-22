console.log('May Node be with you')

const express = require('express')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.get ('/', (request, response)=>{
	response.sendFile (__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
  console.log(req.body)
})


app.listen(3000, function(){
	console.log ('Listening on 3000')
}) 