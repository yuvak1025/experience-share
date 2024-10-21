const Student = require('../models/Student');

// POST method to add a student internship experience
exports.addStudentExperience = async (req, res) => {
  try {
    const newStudent = new Student(req.body); // Get student data from request body
    await newStudent.save(); // Save the new student experience in MongoDB
    res.status(201).json(newStudent); // Respond with the newly created student data
  } catch (error) {
    console.error('Error adding student experience:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// get method to send information of student by id
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        // console.log(student);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error('Error fetching student data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

