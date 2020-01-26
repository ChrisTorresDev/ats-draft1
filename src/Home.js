import React from 'react';
import styled from 'styled-components';
import civil from './assets/civil.jpg';
import survey from './assets/survey.jpg';
import planning from './assets/planning.jpg';
import nwmap1 from './assets/nwmap1.jpg';
import call from './assets/calltoday.jpg';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Home = () => (
  <Styles>
    <div className="container">
        <h2>Welcome!</h2>
        <hr />
      <div className="section">
        <p>Welcome to Advanced Technology Surveying and Engineering (ATS).</p>
        <p>Taking the EXTRA step for you and your project!</p>
      </div>
      <div className="text-center">
        <div className="row section">
          <div className="col">
            <a href="/engineering" className="img-fluid"><img src={civil} alt="Civil Engineering" /></a>
          </div>
          <div className="col">
            <a href="/survey" className="img-fluid"><img src={survey} alt="Land Surveying" /></a>
          </div>
          <div className="col">
            <a href="/Planning" className="img-fluid"><img src={planning} alt="Planning" /></a>
          </div>
        </div>
        <hr />
        <img src={nwmap1} className="img-fluid section" alt="Northwest Map" />
        <hr />
        <img src={call} className="section" alt="Call Today" />
      </div>
    </div>
  </Styles>
)