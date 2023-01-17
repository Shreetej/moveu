// models/Enquiry.js

const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  phone: {
    type: String
  },
  message: {
    type: String,
    required:true
  },
  enquiryDate: {
    type: Date,
    required:true
  }},{
    collection:'enquiries'
  }
);

const Enquiry = mongoose.model('Enquiry', EnquirySchema);
Enquiry.createIndexes();
module.exports = Enquiry