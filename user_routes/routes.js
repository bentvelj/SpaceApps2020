const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

router.get("/pic", (req, res) => {
    console.log("thing")

    var request = {
        method: 'GET',
        headers: new Headers({
            'api_key': '6NtHJvHpr8mralq5YlKnn9664eVXHxw1wfZrgyBA'
        })
    }


    fetch(`https://api.nasa.gov/planetary/apod?api_key=6NtHJvHpr8mralq5YlKnn9664eVXHxw1wfZrgyBA`, request)
        .then(data => data.json())
        .then(rsp => res.send(rsp))

});

router.get('/location', (req, res) => {
    if ('geolocation' in navigator) {
        console.log("boy")
    } else {
        console.log("utut")
    }
})

module.exports = router;