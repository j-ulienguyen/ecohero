const users_handler = require('./users_handler');
const missions_handler = require('./missions_handler');
const completion_list_handler = require('./completion_list_handler');

module.exports.post = async (event, context, callback)=>{
  var obj = (typeof event.body === "object") ? event.body : JSON.parse(event.body),
      response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: null
      };
  
  var key = obj.key,
      posts = obj.data,
      result = null;
  
  //combine all handlers
  var handlers = {
		...users_handler,
		...missions_handler,
		...completion_list_handler
  }

  if(handlers[key]){
    result = await handlers[key](posts);
  }

  if(result === null){
    result = {status:false, msg:"no handler"};
  }
  
  response.body = JSON.stringify(result);
  if(typeof callback === "function"){
    callback(null, response);
  }
  return response;
}