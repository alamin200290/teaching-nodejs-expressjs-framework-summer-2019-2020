var mysql = require('mysql');

function getConnection(callback){

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'node1'
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	 
	});

	callback(connection);
}


module.exports = {
	getResults: function (sql, callback){

		getConnection(function(connection){
			connection.query(sql, function(error, results){
				
				if(error){
					callback([]);
				}else{
					callback(results);
				}
			});

			connection.end(function(err){
				console.log('connection end...');
			});
		});
	}
}