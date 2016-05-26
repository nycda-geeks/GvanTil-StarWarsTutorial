$( document ).ready(function(){
	console.log ("DOM is ready")
	$ ("img").click(function(){
		console.log("somebody clicked the banner")
		$.get('/api', function(randomMessage){
			$('#quotes').empty()
			$('#quotes').append( ("<i>" + randomMessage.quote + "</i>") + "<br><br>" + "- " + randomMessage.name)
			console.log(randomMessage)
		})
	})
})
	

