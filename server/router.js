//All Express applications typically have a router component to manage the routes.

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running.')
});

module.exports = router