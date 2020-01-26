import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import young from '../assets/young.jpg';
import dot from '../assets/dot.jpg';
import kc from '../assets/kc.jpg';

const Styles = styled.div`
  li {
    list-style-type: none;
  }

  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Feedback = () => (
  <Styles>
    <Container className="text-center feedback">
      <h2>Client Feedback</h2>
      <hr />
      <div className="section">
        <p>"Understands how vital communication and correspondence is"</p>
        <p>"Flexible and timely"</p>
        <p>"Tremendous asset to us"</p>
        <h5>POLIN & YOUNG CONSTRUCTION</h5>
        <img src={young} alt="POLIN & YOUNG CONSTRUCTION" />
        <hr />
        <p>"Instrumental in identifying design conflicts and providing solutions"</p>
        <h5>WESTERN FEDERAL LANDS HIGHWAY DIVISION</h5>
        <img src={dot} alt="WESTERN FEDERAL LANDS HIGHWAY DIVISION" />
        <hr />
        <p>"Another complete and accurate submittal"</p>
        <h5>KOOTENAI COUNTY EXAMINING LAND SURVEYOR</h5>
        <img src={kc} alt="KOOTENAI COUNTY EXAMINING LAND SURVEYOR" />
      </div>
    </Container>
  </Styles>
)

