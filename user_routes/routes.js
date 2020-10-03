const express = require('express');
const router = express.Router();


router.get("/pic", (req, res) => {
    console.log("thing")

    var request = {
        method: 'GET',
        headers: { "api_key": '6NtHJvHpr8mralq5YlKnn9664eVXHxw1wfZrgyBA' }
    }


    fetch(`https://api.nasa.gov/planetary/apod`, request)
        .then(data => res.send(data))

});

module.exports = router;