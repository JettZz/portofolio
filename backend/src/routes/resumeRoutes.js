const express = require('express');
const router = express.Router();
const resumeController = require('../controller/resumeController');
const upload = require('../config/uploadConfig');

router.get('/', resumeController.getAllResumes);

router.get('/active', resumeController.getActiveResume);

router.get('/:id', resumeController.getResumeById);

router.post('/', upload.single('resume_file'), resumeController.uploadResume);

router.put('/:id', resumeController.updateResume);

router.delete('/:id', resumeController.deleteResume);

module.exports = router;