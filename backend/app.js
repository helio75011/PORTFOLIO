require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');
const projetRoutes = require('./routes/projetRoutes');

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());
app.use('/api', routes)
app.use('/projets', projetRoutes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})