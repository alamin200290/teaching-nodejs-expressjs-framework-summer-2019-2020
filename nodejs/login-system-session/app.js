var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var home 		= require('./controller/home');
var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});