const express = require('express');
const router = express.Router();
const experienceController = require('../controller/experienceController')
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');
router.get('/', verifyToken, experienceController.getAllExperiences);
router.get('/:id', verifyToken, experienceController.getExperienceById);
router.put('/:id', verifyToken, authorizeRoles('admin'), experienceController.updateExperience);
router.post('/', verifyToken, authorizeRoles('admin'), experienceController.createExperience);
router.delete('/:id', verifyToken, authorizeRoles('admin'), experienceController.deleteExperience);

module.exports = router;