const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontroller');

// Route to add a new student internship experience
router.post('/', studentController.addStudentExperience);
// route to get student info by id
router.get('/:id', studentController.getStudentById);
module.exports = router;
