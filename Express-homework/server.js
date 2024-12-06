const express = require('express');
const app = express();
const PORT = 3500;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello, world! Welcome to my Express server.');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is the JSON data!', success: true });
});