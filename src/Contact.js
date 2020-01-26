import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Contact = () => (
  <Styles>
    <h2>Contact Us</h2>
    <hr />
    <div className="section">
      <p>ATS, Inc.</p>
      <p>9177 N. Hess Street • PO Box 3457</p>
      <p>Hayden, Idaho 83835-3457</p>
    </div>
  </Styles>
)