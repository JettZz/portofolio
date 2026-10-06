const express = require('express');
const router = express.Router();
const skillController = require('../controller/skillController')

router.get('/', skillController.getAllSkill);
router.get('/:id', skillController.getSkillById);
router.put('/:id', skillController.updateSkill);
router.post('/', skillController.createSkill);
router.delete('/:id', skillController.deleteSkill);

module.exports = router;