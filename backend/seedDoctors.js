const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');

mongoose.connect('mongodb://localhost:27017/apollo_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedDoctors = async () => {
  await Doctor.deleteMany({});

  const cities = [
    'Lucknow, Uttar Pradesh', 'Visakhapatnam, Andhra Pradesh', 'Delhi', 'Mumbai', 'Bangalore',
    'Kolkata', 'Pune', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Surat', 'Bhopal', 'Nagpur', 'Patna'
  ];
  const languages = ['English', 'Hindi', 'Telugu', 'Kannada', 'Bengali', 'Marathi', 'Tamil', 'Gujarati'];
  const names = [
    'Dr. Shubham Chauhan', 'Dr. M L Ezhilarasan', 'Dr. Yaazhisi G', 'Dr. Anil Kumar', 'Dr. Priya Sharma',
    'Dr. Rajesh Gupta', 'Dr. Sneha Patil', 'Dr. Vikram Singh', 'Dr. Neha Verma', 'Dr. Arjun Mehta',
    'Dr. Kavita Desai', 'Dr. Rohan Patel', 'Dr. Aarti Menon', 'Dr. Sameer Joshi', 'Dr. Deepa Nair',
    'Dr. Manish Reddy', 'Dr. Sonia Kapoor', 'Dr. Tarun Sethi', 'Dr. Riya Malhotra', 'Dr. Karan Oberoi',
    'Dr. Anjali Thakur', 'Dr. Vivek Rana', 'Dr. Pooja Iyer', 'Dr. Siddharth Bose', 'Dr. Meera Saxena',
    'Dr. Nikhil Sharma', 'Dr. Ritu Aggarwal', 'Dr. Sanjay Pillai', 'Dr. Divya Kulkarni', 'Dr. Amitabh Roy',
    'Dr. Shalini Rao', 'Dr. Pranav Dubey', 'Dr. Nisha Chawla', 'Dr. Aditya Sengupta', 'Dr. Lakshmi Nair',
    'Dr. Harish Vyas', 'Dr. Smriti Bhardwaj', 'Dr. Vinod Menon', 'Dr. Geeta Ahuja', 'Dr. Ravi Shetty'
  ];

  const doctors = Array.from({ length: 40 }, (_, i) => ({
    name: names[i % names.length],
    specialty: 'General Physician',
    experience: 3 + (i % 13), // Range: 3 to 15 years
    location: cities[i % cities.length],
    fees: 300 + (i % 5) * 100, // Range: 300 to 700
    mode: i % 2 === 0 ? 'Online' : 'Hospital Visit',
    languages: [languages[i % languages.length], languages[(i + 1) % languages.length]],
  }));

  await Doctor.insertMany(doctors);
  console.log('Seeded 40 doctors');
  mongoose.connection.close();
};

seedDoctors();