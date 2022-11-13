const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Learn guitar api running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('learn guitar server running', port);
})