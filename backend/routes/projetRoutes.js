// routes/projetRoutes.js
const express = require('express');
const router = express.Router();
const Projet = require('../models/projetModel');

// Créer un nouveau projet
router.post('/', async (req, res) => {
  const projet = new Projet(req.body);
  try {
    const nouveauProjet = await projet.save();
    res.status(201).send(nouveauProjet);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Lire tous les projets
router.get('/', async (req, res) => {
  try {
    const projets = await Projet.find();
    res.status(200).send(projets);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Lire un projet par ID
router.get('/:id', async (req, res) => {
  try {
    const projet = await Projet.findById(req.params.id);
    if (!projet) {
      res.status(404).send("Projet non trouvé");
    }
    res.status(200).send(projet);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mettre à jour un projet
router.patch('/:id', async (req, res) => {
  try {
    const projet = await Projet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(projet);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Supprimer un projet
router.delete('/:id', async (req, res) => {
  try {
    const projet = await Projet.findByIdAndDelete(req.params.id);
    if (!projet) {
      return res.status(404).send();
    }
    res.status(200).send(projet);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
