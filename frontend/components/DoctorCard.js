import React from 'react';

const DoctorCard = ({ doctor }) => {
  // Use the static image from the public folder
  const imageUrl = '/doctor.webp';

  // Random availability time between 3 to 10 minutes
  const availabilityTime = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

  return (
    <div className="doctor-card">
      <img
        src={imageUrl}
        alt={`${doctor.name} profile`}
        className="doctor-image"
      />
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <p className="doctor-experience">{doctor.experience} years • MBBS{doctor.experience > 5 ? ', AFIH, ADVANCED CERTIFICATION' : ''}</p>
        <p className="doctor-location">Apollo 24/7 {doctor.mode === 'Online' ? 'Virtual Clinic' : 'Hospital'} - {doctor.location}</p>
      </div>
      <div className="doctor-actions">
        <p className="doctor-fees">
          ₹{doctor.fees} <span>₹{Math.round(doctor.fees * 0.15)} Cashback</span>
        </p>
        <button className="doctor-consult">Consult Online</button>
        <p className="doctor-availability">Available in {availabilityTime} minutes</p>
      </div>
    </div>
  );
};

export default DoctorCard;