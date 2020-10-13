const express = require("express");

const app = express();

// use() expressjs method is allow us to add a new middleware function
// next is a function that is passing to this function by expressjs and
// allow the request to continue to the next middleware in line, for instance app.use()
app.use((request, response, next) => {

    console.log("In the Middleware");

    next();
});

app.use((request, response, next) => {

    console.log("another");

    // send() is the utility function. Send allow us to send a response, to attach any type of body html
    // send() by default send  setHeader("Content-Type": "text/html")
    response.send("<h1>Hello from Express</h1>");

});

/*
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
server.listen(3000);
 */
// this method is the same as above
app.listen(3000)
