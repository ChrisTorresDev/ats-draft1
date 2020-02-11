import React from 'react';
import call from '../assets/calltoday.jpg';

export const Planning = () => (
  <div>
    <h2>Planning</h2>
    <hr />
    <p>Planning Services:</p>
    <ul>
      <li>Land Use Planning</li>
      <li>Conceptual Site Plans</li>
      <li>Subdivision Design/PUD</li>
      <li>Project Management</li>
      <li>Agency Coordination/Meeting</li>
      <li>Application Submittal/Tracking</li>
      <li>Government/Agency Approvals</li>
      <li>Public Involvement</li>
      <li>Public Hearing Representation</li>
      <li>Neighborhood Meetings</li>
      <li>Presentation Materials</li>
    </ul>
    <hr />
    <div className="text-center section">
      <img src={call} alt="Call Today" />
    </div>
  </div>
)