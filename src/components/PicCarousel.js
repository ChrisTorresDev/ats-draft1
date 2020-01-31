import React from 'react';
import { Carousel } from 'react-bootstrap';
import ATS from '../assets/ATS_LOGO.png';
import moutains from '../assets/moutains.jpg';
import Elk from '../assets/elk.jpg';
import styled from 'styled-components';

const Styles = styled.div`

.item {
  min-height: 380px;
    margin-top: 56px;
    margin-bottom: 30px;
}

#img1 {
  background: url(${moutains});
  background-repeat: no;
}

#img2 {
  background: url(${Elk});
  background-repeat: no;
}

.tint {
  background: #23212187;
}

.carousel-cation {
  padding-top: 30px;
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
}

  img {
    min-height: 500px;
    margin-top: 56px;
    margin-bottom: 30px;
  }

  .logo {
    min-height: .5em;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  hr {
    border-top: 1px solid #c50638;
  }
`;

export const PicCarousel = () => (
  <Styles>
    <Carousel>
      <Carousel.Item id="img1">
        <div className="tint">
          <img alt="" />
        </div>
        <Carousel.Caption className="carousel-cation">
          <img className="logo" src={ATS} alt="logo" />
          <h1>Advanced Technology Surveying and Engineering</h1>
          <hr />
          <p>ATS, Inc.</p>
          <p>9177 N. Hess Street • PO Box 3457</p>
          <p>Hayden, Idaho 83835-3457</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="img2" className="tint">
        <div className="tint">
          <img alt="" />
        </div>
        <Carousel.Caption className="carousel-cation">
          <img className="logo" src={ATS} alt="logo" />
          <h1>Advanced Technology Surveying and Engineering</h1>
          <hr />
          <p>ATS, Inc.</p>
          <p>9177 N. Hess Street • PO Box 3457</p>
          <p>Hayden, Idaho 83835-3457</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)
