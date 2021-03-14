// These are required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3006;

// Express handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express static files
app.use(express.static("public"));

require('./routeAPI')(app);
require('./routeHTML')(app);

// Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
})