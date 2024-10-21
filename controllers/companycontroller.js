const Company = require('../models/Company');

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new company
exports.createCompany = async (req, res) => {
  const { name, logo_url, type, students } = req.body;

  try {
    const newCompany = new Company({ name, logo_url, type, students });
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: 'Error creating company', error });
  }
};


// get company by ID

exports.getCompanyById = async (req, res) => {
    // console.log(`Fetching data for company ID: ${req.params.id}`);
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId).populate('students');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        
        res.json(company); 
    } catch (error) {
        console.error('Error fetching company data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



//  add student to company

// Add a student to a company's student list
exports.addStudentToCompany = async (req, res) => {
  const { studentId } = req.body; // Expect studentId in the request body
  const companyId = req.params.id; // Get company ID from the route parameter

  try {
    // Find the company by its ID
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Add the studentId to the company's students array if not already present
    if (!company.students.includes(studentId)) {
      company.students.push(studentId);
    } else {
      return res.status(400).json({ message: 'Student already added to this company' });
    }

    // Save the updated company
    await company.save();

    res.status(200).json({ message: 'Student added to company successfully', company });
  } catch (error) {
    console.error('Error adding student to company:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

