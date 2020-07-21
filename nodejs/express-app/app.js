var express = require('express');
var app = express();


app.get('/', (req, res)=>{

	res.send('Welcome to express app');
});

app.get('/home', (req, res)=>{
	res.send('home page requested');
});

app.get('/login', (req, res)=>{

});


app.listen(3000, ()=>{
	console.log('express server started at 3000');
});