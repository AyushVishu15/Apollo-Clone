import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [mode, setMode] = useState([]);
  const [experience, setExperience] = useState([]);
  const [fees, setFees] = useState([]);
  const [language, setLanguage] = useState([]);
  const [facility, setFacility] = useState([]);
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  const [showMoreLanguage, setShowMoreLanguage] = useState(false);

  const handleModeChange = (e) => {
    const value = e.target.value;
    setMode((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((m) => m !== value)
    );
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    setExperience((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((exp) => exp !== value)
    );
  };

  const handleFeesChange = (e) => {
    const value = e.target.value;
    setFees((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((l) => l !== value)
    );
  };

  const handleFacilityChange = (e) => {
    const value = e.target.value;
    setFacility((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  const handleApply = () => {
    onFilterChange({ mode, experience, fees, language, facility });
  };

  const handleClear = () => {
    setMode([]);
    setExperience([]);
    setFees([]);
    setLanguage([]);
    setFacility([]);
    setShowMoreExperience(false);
    setShowMoreLanguage(false);
    onFilterChange({ mode: [], experience: [], fees: [], language: [], facility: [] });
  };

  const experienceOptions = [
    '0-5',
    '6-10',
    '11-16',
  ];

  const languageOptions = [
    'English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali',
    'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada',
    'Oriya', 'Persian', 'Assamese',
  ];

  const visibleExperienceOptions = showMoreExperience
    ? experienceOptions
    : experienceOptions.slice(0, 2);

  const visibleLanguageOptions = showMoreLanguage
    ? languageOptions
    : languageOptions.slice(0, 5);

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3 className="filters-title">Filters</h3>
        <button className="filters-clear" onClick={handleClear}>
          Clear All
        </button>
      </div>

      <div className="filters-section">
        <label className="filters-label">Mode of Consult</label>
        <div className="filters-option">
          <input
            type="checkbox"
            value="Hospital Visit"
            checked={mode.includes('Hospital Visit')}
            onChange={handleModeChange}
          />
          <span>Hospital Visit</span>
        </div>
        <div className="filters-option">
          <input
            type="checkbox"
            value="Online"
            checked={mode.includes('Online')}
            onChange={handleModeChange}
          />
          <span>Online Consult</span>
        </div>
      </div>

      <div className="filters-section">
        <label className="filters-label">Experience (In Years)</label>
        {visibleExperienceOptions.map((exp) => (
          <div className="filters-option" key={exp}>
            <input
              type="checkbox"
              value={exp}
              checked={experience.includes(exp)}
              onChange={handleExperienceChange}
            />
            <span>{exp}</span>
          </div>
        ))}
        <button
          className="filters-toggle"
          onClick={() => setShowMoreExperience(!showMoreExperience)}
        >
          {showMoreExperience ? '- Less' : '+1 More'}
        </button>
      </div>

      <div className="filters-section">
        <label className="filters-label">Fees (In Rupees)</label>
        <div className="filters-option">
          <input
            type="checkbox"
            value="100-500"
            checked={fees.includes('100-500')}
            onChange={handleFeesChange}
          />
          <span>100-500</span>
        </div>
        <div className="filters-option">
          <input
            type="checkbox"
            value="500-1000"
            checked={fees.includes('500-1000')}
            onChange={handleFeesChange}
          />
          <span>500-1000</span>
        </div>
        <div className="filters-option">
          <input
            type="checkbox"
            value="1000-Infinity"
            checked={fees.includes('1000-Infinity')}
            onChange={handleFeesChange}
          />
          <span>1000+</span>
        </div>
      </div>

      <div className="filters-section">
        <label className="filters-label">Language</label>
        {visibleLanguageOptions.map((lang) => (
          <div className="filters-option" key={lang}>
            <input
              type="checkbox"
              value={lang}
              checked={language.includes(lang)}
              onChange={handleLanguageChange}
            />
            <span>{lang}</span>
          </div>
        ))}
        <button
          className="filters-toggle"
          onClick={() => setShowMoreLanguage(!showMoreLanguage)}
        >
          {showMoreLanguage ? 'See Less' : 'See More'}
        </button>
      </div>

      <div className="filters-section">
        <label className="filters-label">Facility</label>
        <div className="filters-option">
          <input
            type="checkbox"
            value="Apollo Hospital"
            checked={facility.includes('Apollo Hospital')}
            onChange={handleFacilityChange}
          />
          <span>Apollo Hospital</span>
        </div>
        <div className="filters-option">
          <input
            type="checkbox"
            value="Other Clinics"
            checked={facility.includes('Other Clinics')}
            onChange={handleFacilityChange}
          />
          <span>Other Clinics</span>
        </div>
      </div>

      <button className="filters-apply" onClick={handleApply}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;