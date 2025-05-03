const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// API to add a doctor
router.post('/add-doctor', async (req, res) => {
  try {
    const { name, specialty, experience, location, fees, mode, languages } = req.body;
    const doctor = new Doctor({
      name,
      specialty,
      experience,
      location,
      fees,
      mode,
      languages,
    });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to list doctors with filters and pagination
router.get('/list-doctor-with-filter', async (req, res) => {
  const { mode, specialty, page = 1, experience, fees, language } = req.query;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const query = {};
    if (mode) query.mode = mode;
    if (specialty) query.specialty = specialty;
    if (experience) {
      const [min, max] = experience.split('-').map(Number);
      query.experience = { $gte: min, $lte: max || Infinity };
    }
    if (fees) {
      const [min, max] = fees.split('-').map(Number);
      query.fees = { $gte: min, $lte: max || Infinity };
    }
    if (language) query.languages = language;

    const doctors = await Doctor.find(query).skip(skip).limit(limit);
    const total = await Doctor.countDocuments(query);
    const pages = Math.ceil(total / limit);

    res.json({ doctors, total, pages });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;