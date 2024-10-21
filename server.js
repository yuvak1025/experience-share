const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const companyRoutes = require('./routes/companyRoutes');
const studentRoutes = require('./routes/studentRoutes');
const contactroutes = require('./routes/contactroute');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const Company = require('./models/Company');
const router = express.Router();

// middleware 
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(cors(
  {
    origin : ["http://localhost:3000" , "https://xpiria.onrender.com"]
  })
);


// route1
app.use('/company', companyRoutes);
// route2
app.use('/student', studentRoutes);
// route3
app.use('/contact', contactroutes);


// deployment code
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
