const express = require('express');
const mongoose = require('mongoose')
const routes =  require('./routes');

const app = express();
mongoose.connect('mongodb+srv://rocketseat:omnistack@rocketseat.ah7rs.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(8000);