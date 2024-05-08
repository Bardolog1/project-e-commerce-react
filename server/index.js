const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors({
    origin: 'http://localhost:5173'
  }));
  


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/home', (req, res) => {
    res.send('desde el home 😎👌🏼!');
});

app.get('/about', (req, res) => {
console.log("se estaba ejecutando el about")
    res.json({ message: 'desde el about 😎👌🏼!' });
})

const users = [
    {
        id: 1,
        name: 'Libardo',
        age: 20
    },
    {
        id: 2,
        name: 'Jorge',
        age: 21
    },{
        id: 3,
        name: 'Javier',
        age: 22
    }
]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/api/user', (req, res) => {
    const { name, age } = req.body;
    console.log(req.body)
    console.log(name, age)
    res.json({ message: 'Datos recibidosen el POST 😎👌🏼!' });
    users.push({ name, age });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});