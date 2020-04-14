import express from "express";
import routes from "./routes/User";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import corsInitializer from "./CorsSettings";

const app = express();

//cors settings:
// app.use(cors());

//mongoose connection and settings:
mongoose.Promise = global.Promise;
mongoose.set('debug', true); // TODO: remove later
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/TodoListDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser setup:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors settings:
corsInitializer(app);

routes(app);

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.listen(3001, ()=>{
    console.log("app is listening on port 3001");
});
