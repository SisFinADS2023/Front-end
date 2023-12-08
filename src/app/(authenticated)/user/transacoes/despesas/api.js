import react from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:5000/`
});

const express = require('express');
const routes = require('./routes');
const app = rexpress(); 

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Oi');
});

app.listen(3000, () => {
console.log('porta 3000 ta vivona')
}); 