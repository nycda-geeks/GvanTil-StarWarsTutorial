console.log('May Node be with you')

// requiring Express
const express = require('express')
const app = express()
// requiring bodyparser
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// requiring MongoDB
const MongoClient = require('mongodb').MongoClient

//View engine: PUG
app.set('views', 'views'); 
app.set('view engine', 'pug');

// Static folder
app.use(express.static('resources'));

// database variable
var db

// connecting to mongo database
MongoClient.connect('mongodb://starwars:test@ds011923.mlab.com:11923/starwarsquotes', (error, database) => {
	// error handling
	if(error){
		return console.log (error)
	}
	db = database
	app.listen(3000, function(){
		console.log ('Listening on 3000')
	}); 
});


// GET listening on '/' that renders index.pug
app.get ('/', (request,response)=>{
	response.render ('index')
})

// GET listening on '/api' that makes a connection with a mongo database and picks a random message
app.get ('/api', (request, response)=>{
		var cursor= db.collection('quotes').find()
		cursor.toArray(function(error, result){
		console.log("MongoDB is loaded")
		
		var allMessages = result
		var randomMessage = allMessages[Math.floor(Math.random()*allMessages.length)]
		console.log(randomMessage)
		response.send (randomMessage)
  });
});

// POST listening on '/quotes'
app.post('/quotes', (request, response) => {
// saving request.body to mongo database quotes
  db.collection('quotes').save(request.body, (error, result) => {
// error handling
   	if (error){
    	return console.log(error)
    }
    console.log('saved to database')
    response.redirect('/')
  })
})



