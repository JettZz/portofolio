const express = require('express');
const router = express.Router();
const experienceController = require('../controller/experienceController')

router.get('/', experienceController.getAllExperiences);
router.get('/:id', experienceController.getExperienceById);
router.put('/:id', experienceController.updateExperience);
router.post('/', experienceController.createExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;