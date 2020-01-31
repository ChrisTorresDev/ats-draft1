import React from 'react';
import call from './assets/calltoday.jpg';

export const Survey = () => (
  <div>
    <h2>Surveying</h2>
    <hr />
    <p>Land Surveying Services:</p>
    <ul>
      <li>Boundary location/Mapping</li>
      <li>Property Research</li>
      <li>GPS/RTK/GIS Surveying</li>
      <li>ALTA/ACSM Land Title Survey</li>
      <li>Condominium Survey</li>
      <li>Boundary Line Adjustments</li>
      <li>Right of Way/Easement</li>
      <li>Aerial/Photogrammetric Survey</li>
      <li>Fence line Surveys</li>
      <li>Riparian Boundary Survey</li>
      <li>Topographic Surveying/Mapping</li>
      <li>Legal Descriptions (writing and review)</li>
      <li>FEMA/LOMA Certificates</li>
      <li>Construction Staking</li>
      <li>Final/Preliminary Subdivision Platting</li>
    </ul>
    <hr />
    <div className="text-center section">
      <img src={call} alt="Call Today" />
    </div>
  </div>
)