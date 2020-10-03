const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 4000; //setting port for dev or production

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})