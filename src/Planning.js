import React from 'react';
import styled from 'styled-components';
import call from './assets/calltoday.jpg';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Planning = () => (
  <Styles>
    <h2>Planning</h2>
    <hr/>
    <div className="section">
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
    </div>
    <hr/>
    <div className="text-center section">
      <img src={ call } alt="Call Today"/>
    </div>
  </Styles>
)