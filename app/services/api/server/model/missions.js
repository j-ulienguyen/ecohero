const approot = require('app-root-path');
const config = require(approot+"/config"); 
const types = config.types;
const DB = require(types.DB_PATH);

module.exports = class missionsDB extends DB {
  constructor(data){
    super("missions", ["id","mission_name","mission_description","mission_star","mission_xp","mission_month","mission_type"]);
    this.data = data;
    this.returns = ["*"];
    this.config = {};
  }
  
  set set_data(d){
    this.data = d;
  }

  set set_returns(d){
    if(d){
      this.returns = d;
    }
  }

  set set_config(d){
    if(d){
      this.config = d;
    }
  }

  async insert(){
    super.set_config = {
      
      
      ...this.config
    };

    var result = await super.insert(this.data, this.returns);
    return result;
  }
  
  async read(){
    super.set_config = {
      order:["id"],
      
      ...this.config
    };

    var result = await super.read(this.data, this.returns)
    return result;
  }
  
  async update(){
    super.set_config = {
      
      
      query_where:["id"],
      ...this.config
    };

    var result = await super.update(this.data, this.returns);
    return result;
  }
  
  async delete(){
    super.set_config = {
      ...this.config
    };
    
    var result = await super.delete(this.data);
    return result;
  }

  async custom(){
    /*
      your own custom query
    */
  }
}