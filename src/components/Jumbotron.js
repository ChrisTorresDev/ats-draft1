import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumbo1 from '../assets/elk.jpg';

const Styles = styled.div`
  .jumbo {
    padding-top: 150px;
    padding-bottom: 100px;
    background: url(${jumbo1}) no-repeat fixed bottom;
    background-size: cover;
    background-position: center top;
    color: #ccc;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .sub-title {
    padding-top: 60px;
    line-height: 0.5em;
  }

  hr {
    border-top: 1px solid #c50638;
  }
`;

export const Jumbotron = () => (
   <Styles>
     <Jumbo fluid className="jumbo">
       <div className="overlay"></div>
        <Container>
          <div className="text-center title">
            <h1>Advanced Technology Surveying and Engineering</h1>
          </div>
          <hr/>
          <div className="text-center sub-title">
            <p>ATS, Inc.</p>
            <p>9177 N. Hess Street • PO Box 3457</p>
            <p>Hayden, Idaho 83835-3457</p>
          </div>
        </Container>
     </Jumbo>
   </Styles>
)

