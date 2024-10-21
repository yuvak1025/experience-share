// models/Company.js
const mongoose = require('mongoose');
const Student = require('./Student'); // Import the Student model

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_url: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  type: { type: String, enum: ['intern', 'placement'], required: true },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
