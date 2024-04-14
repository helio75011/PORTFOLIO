const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    githubLink: { 
        type: String, 
        required: true 
    }
});

const TwoProject = mongoose.model('TwoProject', projectSchema);

module.exports = TwoProject;