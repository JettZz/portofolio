const express = require('express');
const router = express.Router();
const skillController = require('../controller/skillController')
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');
router.get('/', verifyToken, skillController.getAllSkill);
router.get('/:id', verifyToken, skillController.getSkillById);
router.put('/:id', verifyToken, authorizeRoles('admin'), skillController.updateSkill);
router.post('/', verifyToken, authorizeRoles('admin'), skillController.createSkill);
router.delete('/:id', verifyToken, authorizeRoles('admin'), skillController.deleteSkill);

module.exports = router;