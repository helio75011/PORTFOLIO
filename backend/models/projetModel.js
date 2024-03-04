const mongoose = require('mongoose');

const projetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true
    },
    technologies: [String],
    image: String,
    lienGitHub: String,
    lienDemo: String,
    dateCreation: {
        type: Date,
        default: Date.now
  }
});

module.exports = mongoose.model('Projet', projetSchema)


// {
//     "titre": "Mon Super Projet",
//     "description": "Ceci est une description détaillée de mon super projet.",
//     "technologies": ["JavaScript", "React", "Node.js", "MongoDB"],
//     "image": "url_de_l_image_du_projet",
//     "lienGitHub": "url_du_repo_github",
//     "lienDemo": "url_de_la_demo",
//     "dateCreation": "2023-03-01"
//   }
  