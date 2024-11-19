// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyName: { type: String },
  companySize: { type: String },
  services: [{ type: String }],
  budgetRange: { type: String },
  isFirstPentest: { type: Boolean, default: false },
  message: { type: String },
  subscribe: { type: Boolean, default: false },
}, { timestamps: true });

const Contact  =  mongoose.models.Contact || mongoose.model('Contact', contactSchema);
module.exports = Contact
