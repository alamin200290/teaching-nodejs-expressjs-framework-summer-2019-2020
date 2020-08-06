var db = require('./db');


module.exports ={

	get: function(id, callback){
		var sql = "select * from product where id='"+id;
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(id, callback){
		var sql = "select * from product";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	
	insert: function(product, callback){
		var sql = "insert into product values('', "+product.product_name+", "+product.quantity+", "+product.price+")";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(product, callback){
		var sql = "";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from product where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}