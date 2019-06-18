const express = require('express');

const app = express();

//  Use can take total 5 arguments
app.use((req, res, next) => {
    console.log('In a middleware!');
    next(); // Allow the request to continue to next middleware
});

//  We pass '/' but in express it will redirect to every webpage which
//  starts with '/'
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    // It automatically stes Header as text/html
    res.send('<h1 align="center">Hello from ExpressJS</h1>');
});

//  Using listen from express
app.listen(3000);

// Old methode for creating server
// const server = http.createServer(app);
// server.listen(3000);
