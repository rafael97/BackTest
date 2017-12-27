require('dotenv').config();
const express = require("express");
const server = express();
const routes = require("./routes");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
server.use(bodyParser.json());
server.use("/api" , routes);

server.listen(port, () => {
	console.log('server listening on', port);
});


module.exports = server;