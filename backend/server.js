const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes');

app.use('/', routes);


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
