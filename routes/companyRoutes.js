const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companycontroller');
const Company = require('../models/Company');

// Beware of wild character error
// Search for a company by name and type
router.get('/search', async (req, res) => {
    const { name, type } = req.query;
    try {
        const company = await Company.findOne({ name, type });
        if (company) {
            return res.status(200).json(company);
        } else {
            // Instead of 404, send a 200 status with a message
            return res.status(200).json({  _id : null });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error searching for company', error });
    }
});


// Define routes
router.post('/', companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.post('/:id/addStudent', companyController.addStudentToCompany);
router.get('/:id', companyController.getCompanyById);





module.exports = router;


