import React, { useState } from 'react';
import './style.css';
import Screen from '../screen/Screen';

const FilterbyPlatfrom = ({onPlatformChange}) => {
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const handlePlatformChange = (platform) => {
      setSelectedPlatform(platform);
      onPlatformChange(platform);
     
    };

  return (
    <>
    <div className='filter-container'>
      <label>Filter by Platform</label>
      <select value={selectedPlatform} onChange={(e) => handlePlatformChange(e.target.value)}>
        <option value="">Select Platform</option>
        <option value="windows">Windows</option>
        <option value="web Browser">Web Browser</option>
      </select>
      {selectedPlatform && (
        <p style={{fontSize:"12px"}}>Selected Platform: {selectedPlatform}</p>
       
      )}
    </div>
    
    </>
  );
      }

export default FilterbyPlatfrom;
