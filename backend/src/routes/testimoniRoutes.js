const express = require('express');
const router = express.Router();
const testimoniController = require('../controller/testimoniController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');
router.get('/', verifyToken, testimoniController.getAllTestimoni);

router.get('/:id', verifyToken, testimoniController.getTestimoniById);

router.post('/', verifyToken, authorizeRoles('admin'), testimoniController.createTestimoni);

router.put('/:id', verifyToken, authorizeRoles('admin'), testimoniController.updateTestimoni);

router.delete('/:id', verifyToken, authorizeRoles('admin'), testimoniController.deleteTestimoni);

module.exports = router;