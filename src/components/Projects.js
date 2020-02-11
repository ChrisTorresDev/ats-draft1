import React from 'react';
import call from '../assets/calltoday.jpg';

export const Projects = () => (
  <div>
    <h2>Projects</h2>
    <hr />
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
    <hr />
    <div className="text-center section">
      <img src={call} alt="Call Today" />
    </div>
  </div>
)