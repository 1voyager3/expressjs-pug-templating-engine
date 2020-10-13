const express = require('express');
const path = require('path');
const rootDir = require('../utility/path');

const router = express.Router();

router.get('/', (request, response, next) => {
// method to get access to the html files in the view directory
    response.sendFile(path.join(rootDir, 'views', 'shop.html'))
});


module.exports = router;