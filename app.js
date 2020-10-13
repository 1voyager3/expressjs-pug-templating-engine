const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')

// to be able parse request body
app.use(bodyParser.urlencoded({extended: false}));

// to serve files statically it means not handled by the express router
// or other middleware but instead directly forwarder to the file system
// for this we use static() which serves static files through the new middleware app.use()
app.use(express.static(path.join(__dirname, 'public')))


// the same as http://localhost:3000/admin
app.use("/admin", adminRouter);

app.use(shopRouter);

// we don't use path because it by default
app.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
