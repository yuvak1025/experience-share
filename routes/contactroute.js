const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactcontroller');

// POST route for creating a contact message
router.post('/', contactController.createContact);

module.exports = router;
