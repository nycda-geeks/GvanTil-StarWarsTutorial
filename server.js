console.log('May Node be with you')

const express = require('express')
const app = express()

app.get ('/', (request, response)=>{
	response.sendfile ()
});


app.listen(3000, function(){
	console.log ('Listening on 3000')
}) 