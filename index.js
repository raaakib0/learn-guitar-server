const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Learn guitar api running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === '01') {
        res.send(course);
    }
    else {
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course);
    }
    
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('learn guitar server running', port);
})