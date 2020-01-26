import React from 'react';
import styled from 'styled-components';
import call from './assets/calltoday.jpg';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Engineering = () => (
  <Styles>
    <h2>Engineering</h2>
    <hr/>
    <div className="section">
      <p>Engineering Services:</p>
      <ul>
        <li>Residential/Commercial Site Plan</li>
        <li>Stormwater Management Plan</li>
        <li>Road Plan & Design</li>
        <li>Water/Wastewater Systems</li>
        <li>Project Feasibility</li>
        <li>Subdivision Design</li>
      </ul>
    </div>
    <hr/>
    <div className="text-center section">
      <img src={ call } alt="Call Today"/>
    </div>
  </Styles>
)