const approot = require('app-root-path');
const config = require(approot+"/config");
const types = config.types;
const crud = require(approot+"/server/crud");
const myjwt = require(types.JWT_PATH);

//using objects so that I can combine objects from different files together
module.exports = {
	users_create:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.create({model:'users', data:posts, returns:['*'], config:null});
	},
	users_read:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.read({model:'users', data:posts, returns:['*'], config:null});
	},
	users_read_stars:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.read({model:'users', data:posts, returns:['*'], config:{order:["star_count"]}});
	},
	users_update:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.update({model:'users', data:posts, returns:['*'], config:null});
	},
	users_delete:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.delete({model:'users', data:posts, returns:['*'], config:null});
	},
	users_auth:async (posts)=>{
		var r = await crud.read({model:'users', data:{username:posts.username}, returns:['*'], config:null});
		if(r.status && r.data && r.data.length > 0){
			var match = await types.encryptCompare(posts.password, r.data[0].password);
			if(match){
				return r;
			}
		}
		return {status:false, msg:"not authenticated"};
	}
};