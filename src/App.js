import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Home } from './Home';
import { About } from './About';
import { Survey } from './Survey';
import { Planning } from './Planning';
import { Projects } from './Projects';
import { Engineering } from './Engineering';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Navigationbar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <Jumbotron />
      <Container>
        <Row>
          <Col className="col-lg-8">
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
          <Col>
            <Feedback />          
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
 