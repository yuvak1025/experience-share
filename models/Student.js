// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  branch: { type: String, required: true },
  internship_session: { type: String, required: true },
  offer_obtained: { type: String, required: true },
  role_description: { type: String, default: 'NA' },
  intern_location: { type: String, required: true },
  eligible_branches: { type: String, required: true },
  eligibility_criteria: { type: String, required: true },
  selection_procedure: { type: String, required: true },
  description_online_test: { type: String, required: true },
  description_technical_interview: { type: String, required: true },
  description_hr_round: { type: String, required: true },
  preparation_strategy: { type: String, required: true },
  resources: { type: String, required: true },
  college: {type : String,required:true}
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
