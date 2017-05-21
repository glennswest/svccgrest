var restify = require('restify');
var pgRestify = require('pg-restify');

// create a simple restify server
var server = restify.createServer();

// add any additional custom server configuration

// add the pgRestify functionality
// by providing the restify instance
// and a server connection string
pgRestify.initialize({
  server: server,
  pgConfig: 'pg://svccgdb.ncc9.com:26257/cg'
}, function(err, pgRestifyInstance) {

  // If there is an error initializing you will see it here.
  if (err) throw err;

  // now that the query to get table metadata is done,
  // start the server
  server.listen(8080);

});

