require('dotenv').config();  // Charger les variables d'environnement
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Utilisation de la variable d'environnement PORT

// Middleware pour parser le body en JSON
app.use(cors());
app.use(express.json()); // Utilisation de express.json() au lieu de bodyParser.json()

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Importation des routes
const projectRoutes = require('./routes/projectRoutes');
app.use('/projects', projectRoutes);

const projectTwoRoutes = require('./routes/projectTwoRoutes');
app.use('/twoProjects', projectTwoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
