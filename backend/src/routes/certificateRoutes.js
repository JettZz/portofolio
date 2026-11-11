const express = require('express');
const router = express.Router();
const certificateController = require('../controller/certificateController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', verifyToken, certificateController.getAllCertificates);

router.get('/:id', verifyToken, certificateController.getCertificateById);

router.post('/', verifyToken, authorizeRoles('admin'), certificateController.createCertificate);

router.put('/:id', verifyToken, authorizeRoles('admin'), certificateController.updateCertificate);

router.delete('/:id', verifyToken, authorizeRoles('admin'), certificateController.deleteCertificate);

module.exports = router;