const approot = require('app-root-path');
const config = require(approot+"/config");
const types = config.types;
const crud = require(approot+"/server/crud");
const myjwt = require(types.JWT_PATH);

//using objects so that I can combine objects from different files together
module.exports = {
	missions_create:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.create({model:'missions', data:posts, returns:['*'], config:null});
	},
	missions_read:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		var r = await crud.read({model:'missions', data:{}, returns:['*'], config:null});
		if(posts.user_id){
			var c = await crud.read({model:'completion_list', data:posts, returns:['*'], config:null});
		}
		console.log(r, c);
		if(c.status && c.data && c.data.length > 0){
			var missions = r.data.map((o,i)=>{
				var tc = c.data.filter((o2, i2)=>{
					return o2.mission_id === o.id;
				});
				if(tc.length>0){
					o.status = tc[0].status;
					o.cl_id = tc[0].id;
				} else {
					o.status = 1;
				}

				return o;
			});

			r.data = missions;
			return r;
		}

		return r;
	},
	missions_update:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.update({model:'missions', data:posts, returns:['*'], config:null});
	},
	missions_delete:async (posts)=>{
		//write your logic here for your crud
		//you can do var result = await crud(...); and return it if needed
		return await crud.delete({model:'missions', data:posts, returns:['*'], config:null});
	}
};