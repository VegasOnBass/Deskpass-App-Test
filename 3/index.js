// Dependencies 
const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require("fs")

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";

// Logging set to dev format.
app.use(morgan('dev'));


// Authorization required to make request. Currently set to deskpass.
app.use('', (req, res, next) => {
    if (req.headers.authorization === 'deskpass' ) {
        next()
    } else {
        res.status(403).send("Authorization Required.")
    }
 });

// Blacklisting
var blocked = [] // This will hold the list of blacklisted Urls

fs.watchFile('./blocked.txt', function(c,p) { update_blocked_list() }) // Watching blocked.text for any changes


// This function updates blocked for use
function update_blocked_list() {
    console.log("Updating blocked files.");
    var data = fs.readFileSync('./blocked.txt') // Retrieving data
    blocked = data.toString('utf8').split('\n') // Converting data to string 
}

// Logic for Blacklist
app.use('', (req, res, next) => {
    update_blocked_list() // Calls function to set blocked
    if (blocked.includes(req.url)) {
        res.status(403).send("This site is blacklisted") 
    }else{
        next()
    }
});

// Proxy endpoints
app.use('/json_placeholder', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: '',
    },
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
 