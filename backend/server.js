const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', doctorRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/apollo_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});