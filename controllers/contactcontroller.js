// controllers/contactController.js
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new contact entry
    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();

    return res.status(201).json({ message: 'Contact message sent successfully!' });
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: 'An error occurred while sending the message.' });
  }
};
