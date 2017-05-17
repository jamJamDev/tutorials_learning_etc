var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index.htm', function(req, res){
	res.sendFile( __dirname + "/" + "index.htm");
})

app.get('/process_get', function(req, res){
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res){
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

//These are from the "Basic Routing" section of the tutorial
/*app.post('/', function(req, res){
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
})

app.delete('/del_user', function(req, res){
	console.log("Got a DELETE request for /del_user");
	res.send("Hello DELETE");
})

app.get('/list_user', function(req, res){
	console.log("Got a GET request for /list_user");
	res.send('Page Listening');
})

app.get('/ab*cd', function(req, res){
	console.log("Got a request for /ab*cd");
	res.send('Page Pattern match');
})
*/
var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app is listening on at http://%s:%s", host, port)
})

