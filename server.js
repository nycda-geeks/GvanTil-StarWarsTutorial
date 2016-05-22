console.log('May Node be with you')

const express = require('express')
const app = express()

app.get ('/', (request, response)=>{
	response.sendFile (__dirname + '/index.html')
});


app.listen(3000, function(){
	console.log ('Listening on 3000')
}) 