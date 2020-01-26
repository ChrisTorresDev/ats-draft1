import React from 'react';
import styled from 'styled-components';
import call from './assets/calltoday.jpg';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Projects = () => (
  <Styles>
    <h2>Projects</h2>
    <hr/>
    <div className="section">
      <p>Here are just a few of our past projects:</p>
      <ul>
        <li>Knudtsen Chevrolet – Post Falls, Idaho (Commercial site)</li>
        <li>Bunco Road – Athol, Idaho – Federal Highway Project (5 miles of Federal road construction)</li>
        <li>Gozzer Ranch Golf & Lake Club – Coeur d’Alene, Idaho (Infrastructure and platting of 660 acre golfing community)</li>
        <li>Rocking “R” Ranch – Hayden, Idaho (300+ multi-phased residential subdivision)</li>
        <li>City of Boulder – Boulder, Montana (Design and Surveying of municipal sewer and water mains)</li>
        <li>Hecla Mining – Mullan, Idaho (Construction staking new infrastructure for mining)</li>
        <li>Hecla Mining – Mullan, Idaho (Construction staking new infrastructure for mining)</li>
        <li>Setters Gravel Pit – Setters, Idaho (Design and Permit a 10-acre borrow site with Department of Lands and County)</li>
        <li>Prairie View Terrace Condominiums – Post Falls, Idaho (52-Unit Condo Master Planning Platting and staking)</li>
        <li>Elkhorn Addition – Twin Lakes, Idaho (160-acre P.U.D. master planning, design, platting and construction)</li>
      </ul>
    </div>
    <hr/>
    <div className="text-center section">
      <img src={ call } alt="Call Today"/>
    </div>
  </Styles>
)