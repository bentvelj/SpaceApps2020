let express = require('express');
const app = express();
let cors = require('cors');

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(cors());
const userRoute = require('./user_routes/routes');

app.use(express.urlencoded({
    extended: true
}));

app.use('/', userRoute);

const port = process.env.PORT || 4000; //setting port for dev or production

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
});