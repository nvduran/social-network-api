const express = require('express');
const mongoose = require('mongoose');

const app = new express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require('./routes'));

mongoose.connect('mongodb://localhost/social-network-api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true)

app.listen(PORT, () => console.log(`Connected on port ${PORT}`))