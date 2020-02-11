import React from 'react';
import call from '../assets/calltoday.jpg';

export const Engineering = () => (
  <div>
    <h2>Engineering</h2>
    <hr />
    <p>Engineering Services:</p>
    <ul>
      <li>Residential/Commercial Site Plan</li>
      <li>Stormwater Management Plan</li>
      <li>Road Plan & Design</li>
      <li>Water/Wastewater Systems</li>
      <li>Project Feasibility</li>
      <li>Subdivision Design</li>
    </ul>
    <hr />
    <div className="text-center section">
      <img src={call} alt="Call Today" />
    </div>
  </div>
)