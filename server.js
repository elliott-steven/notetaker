// These are required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3006;



// Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
})