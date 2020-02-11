import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Home } from './components/Home';
import { About } from './components/About';
import { Survey } from './components/Survey';
import { Planning } from './components/Planning';
import { Projects } from './components/Projects';
import { Engineering } from './components/Engineering';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { Navigationbar } from './components/NavigationBar';
import { PicCarousel } from './components/PicCarousel'
import { Jumbotron } from './components/Jumbotron';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
      <Navigationbar />
      <PicCarousel />
      <Container>
        <Row>
          <Col className="col-lg-8 section">
            <Layout>
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/survey" component={Survey} />
                  <Route path="/planning" component={Planning} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/engineering" component={Engineering} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
            </Layout>
          </Col>
          <Col className="section">
            <Feedback />          
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
      </Styles>
    </React.Fragment>
  );
}

export default App;
 