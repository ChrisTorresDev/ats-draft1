import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    font-size: .75em;
    line-height: 0.5em;
  }
`;

export const Footer = () => (
  <Styles>
    <div className="text-center section">
        <p>ADVANCED TECHNOLOGY SURVEYING & ENGINEERING</p>
        <p>9177 N. Hess Street • PO Box 3457</p>
        <p>Hayden, Idaho 83835-3457</p>
        <p>PHONE: (208) 772-2745 • FAX: (208) 762-7731</p>
      </div>
  </Styles>
)