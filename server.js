let express = require('express');
const app = express();
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const port = process.env.PORT || 4000; //setting port for dev or production

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
});