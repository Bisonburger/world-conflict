//
// # SimpleServer
//
var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');

var alasql = require('alasql');

var app = express();
var server = http.createServer(app);

// Setup mappings for third-party libraries
app.use('/', express.static(path.resolve(__dirname, '../client')));
app.use('/', express.static(path.resolve(__dirname, '../client/static')));

// Setup mappings for node libraries
app.use('/angular', express.static(path.resolve(__dirname, '../node_modules/angular')));
app.use('/bootstrap', express.static(path.resolve(__dirname, '../node_modules/bootstrap/dist')));
app.use('/d3', express.static(path.resolve(__dirname, '../node_modules/d3')));
app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/dist')));
app.use('/angular-ui-router', express.static(path.resolve(__dirname, '../node_modules/angular-ui-router/release')));
app.use('/bootswatch', express.static(path.resolve(__dirname, '../node_modules/bootswatch')));
app.use('/font-awesome', express.static(path.resolve(__dirname, '../node_modules/font-awesome')));
app.use('/angular-ui-bootstrap', express.static(path.resolve(__dirname, '../node_modules/angular-ui-bootstrap')));
app.use('/angular-animate', express.static(path.resolve(__dirname, '../node_modules/angular-animate')));
app.use('/requirejs', express.static(path.resolve(__dirname, '../node_modules/requirejs')));
app.use('/jvectormap', express.static(path.resolve(__dirname, '../node_modules/jvectormap-next')));


// set up routes for REST services
var router = express.Router();
app.use('/api/wc-service', router);

router.route('/conflict').get( (req,res) => 
  alasql.promise( 'select * from xlsx( "server/ged50.xlsx", {sheetid: "Sheet3"} )' )
    .then( (data) => res.json(data) )
    .catch( (err) => { console.log( 'Error: ' + err ); return []; } ) );

console.log( 'Set up routes' );

// start the server and listen on either the port/IP defined in your environment or
// on localhost:3000 if there arent any environment variables set
server.listen(process.env.SSV_PORT || 3000, process.env.SSV_IP || "localhost", function() {
  var addr = server.address();
  console.log("WorldConflict Server listening at", addr.address + ":" + addr.port);
  console.log("WorldConflict Server REST services exposed at", addr.address + ":" + addr.port + '/api/wc-service' );
});
