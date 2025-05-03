import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Filters from '../components/Filters';
import DoctorCard from '../components/DoctorCard';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    mode: [],
    experience: [],
    fees: [],
    language: [],
    facility: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async (page = 1) => {
    let allDoctors = [];
    let totalPages = 1;
    setError(null);
    setLoading(true);

    while (page <= totalPages) {
      const query = new URLSearchParams({
        page,
        ...(filters.mode.length > 0 && { mode: filters.mode.join(',') }),
        specialty: 'General Physician',
        ...(filters.experience.length > 0 && { experience: filters.experience[0] }),
        ...(filters.fees.length > 0 && { fees: filters.fees[0] }),
        ...(filters.language.length > 0 && { language: filters.language[0] }),
        ...(filters.facility.length > 0 && { facility: filters.facility[0] }),
      }).toString();

      try {
        const response = await fetch(`http://localhost:5000/api/doctors/list-doctor-with-filter?${query}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.doctors || !Array.isArray(data.doctors)) {
          throw new Error('Invalid data format received from API');
        }
        console.log('Fetched data:', data); // Debug log
        allDoctors = [...allDoctors, ...data.doctors];
        totalPages = data.pages || 1;
        setTotalDoctors(data.total || 0);
        page++;
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
        setError('Failed to load doctors. Please ensure the backend server is running and the database is populated.');
        setLoading(false);
        return;
      }
    }

    setDoctors(allDoctors);
    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Debug log to confirm Filters component is being rendered
  console.log('Rendering Filters component');

  return (
    <div>
      <Head>
        <title>Consult General Physicians Online - Apollo 24/7</title>
        <meta
          name="description"
          content="Consult top General Physicians and Internal Medicine Specialists online on Apollo 24/7. Filter by mode, experience, fees, and language to book appointments."
        />
        <meta
          name="keywords"
          content="general physician, internal medicine, online doctor consultation, Apollo 24/7, doctor appointment, healthcare"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Apollo 24/7" />
        <meta property="og:title" content="Consult General Physicians Online - Apollo 24/7" />
        <meta
          property="og:description"
          content="Consult top General Physicians and Internal Medicine Specialists online on Apollo 24/7. Filter by mode, experience, fees, and language to book appointments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.apollo247.com/doctors" />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consult General Physicians Online - Apollo 24/7" />
        <meta
          name="twitter:description"
          content="Consult top General Physicians and Internal Medicine Specialists online on Apollo 24/7. Filter by mode, experience, fees, and language to book appointments."
        />
        <meta name="twitter:image" content="/logo.jpg" />
        <link rel="canonical" href="https://www.apollo247.com/doctors" />
      </Head>
      <Header />
      <div className="main-container">
        <Filters onFilterChange={handleFilterChange} />
        <div className="content-container">
          <h1 className="content-title">
            Consult General Physicians Online - Internal Medicine Specialists{' '}
            <span>({totalDoctors} doctors)</span>
          </h1>
          {loading ? (
            <p className="content-loading">Loading doctors...</p>
          ) : error ? (
            <p className="content-error">{error}</p>
          ) : doctors.length === 0 ? (
            <p className="content-no-doctors">No doctors available</p>
          ) : (
            <div className="doctor-list">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;