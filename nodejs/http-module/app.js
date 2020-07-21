var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

	//console.log(request.url);
	
	//response.write('<h1>first http response</h1>');
	//response.end();

	if(request.url == '/login'){
		
		/*var login = fs.readFileSync('login.html');
		response.write(login.toString());
		response.end();*/

		fs.createReadStream('cfp.pdf').pipe(response);

		//response.write('<h1>Login page requested...</h1>');
		//response.end();
	}else if(request.url == '/home'){

		response.writeHead(200, {'content-type': 'text/plain'});
		response.write('<h1>Home page requested...</h1>');
		response.end();
	}else{
		response.write('404-Invalid Request!...');
		response.end();
	}

});

server.listen(3000);
console.log('server started at 3000...');
