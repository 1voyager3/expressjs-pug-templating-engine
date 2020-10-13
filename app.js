const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')

// to be able parse request body
app.use(bodyParser.urlencoded({extended: false}));

// the same as http://localhost:3000/admin
app.use("/admin", adminRouter);

app.use(shopRouter);

// we don't use path because it by default
app.use((request, response, next) => {
    response.status(404).send("<h1>Page not Found</h1>")
})

app.listen(3000)
