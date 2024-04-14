const express = require('express');
const router = express.Router();
const Project = require('../models/TwoProject');

// Ajouter un nouveau projet
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).send(newProject);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer tous les projets
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Mettre à jour un projet
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProject) {
      return res.status(404).send('No project found with that ID');
    }
    res.status(200).send(updatedProject);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Supprimer un projet
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).send('No project found with that ID');
    }
    res.status(204).send(); // 204 No Content, pas de contenu à renvoyer après une suppression
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;