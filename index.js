const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('YbFGWjxtzb', uuidlib.v4());
	}

module.exports = generateId
