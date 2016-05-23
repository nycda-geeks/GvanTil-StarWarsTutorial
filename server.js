console.log('May Node be with you')

const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://starwars:test@ds011923.mlab.com:11923/starwarsquotes', (error, database) => {
	if(error)return console.log (error)
	db = database
	app.listen(3000, function(){
		console.log ('Listening on 3000')
	}); 
});

app.use(bodyParser.urlencoded({extended: true}))


app.get ('/', (request, response)=>{
	response.sendFile (__dirname + '/index.html')
	var cursor = db.collection('quotes').find().toArray(function(error, results){
		console.log("MongoDB is loaded")
		console.log (results)
	})
  	
});


app.post('/quotes', (request, response) => {
  db.collection('quotes').save(request.body, (error, result) => {
    if (error) return console.log(error)

    console.log('saved to database')
    response.redirect('/')
  })
})

