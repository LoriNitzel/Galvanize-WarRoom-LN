
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('serverData', function(table){
      table.increments('id');
      table.string('serverName', 50);
      
    })

    ])
  
};

exports.down = function(knex, Promise) {
  
};
