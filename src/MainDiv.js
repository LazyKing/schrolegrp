import React, { Component } from 'react';
import { Button, Row, Col, Card } from 'antd';
import { Carousel } from 'react-bootstrap';
import './App.css';

/*Import Redux functionalities*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";
import { testDispatch } from "./actions/index";

/*Import Components*/
//import BookList from "./book-list";

/*Import Images*/
//import webLogo from './assets/about_us.jpg';
import carousel_1 from './assets/IMG_1089.JPG';
import carousel_2 from './assets/HongKong.JPG';
import carousel_3 from './assets/the_great_wall.png';
import feature_1 from './assets/feature_1.jpg';
import feature_2 from './assets/feature_2.jpg';
import feature_3 from './assets/feature_3.jpg';

const store1=createStore(reducers, applyMiddleware(thunk)) ;
store1.dispatch(testDispatch());

class MainDiv extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Provider store={store1}>
      <div className="App height-fluid">
        <div className="App-header home-page-imageContainer">
          <div className="col-sm-6 float-right home-page-intro-text">
            <h1 style={{'textAlign': 'center','color': '#1968a5'}}>
                Matching highly qualified teachers, and administrators to extremely desirable international schools.
            </h1>
            <p style={{'textAlign': 'center','color': '#333333'}}>
              <strong>
                International Education Services travel the globe to find a diversified teaching pool for schools to choose from.
                In doing so, we expedite the recruiting and hiring process for both teachers and international education institutions.<br />
              </strong>
            </p>
          </div>
        </div>
        <div className="featured-list-container" >
          <Row type="flex" justify="space-around">
            <Col span={6}>
              <Card style={{ height:400 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-card-image">
                  <img alt="example" width="100%" src={feature_1} />
                </div>
                <div className="custom-card-text">
                  <h3>University & Careers Counselor</h3>
                  <p>International School Ho Chi Minh City</p>
                  <Button>Find out more</Button>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ height:400 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-card-image">
                  <img alt="example" width="100%" src={feature_2} />
                </div>
                <div className="custom-card-text">
                  <h3>High School Mathematics Teacher</h3>
                  <p>American International School of Dhaka</p>
                  <Button>Find out more</Button>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ height:400 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-card-image">
                  <img alt="example" width="100%" src={feature_3} />
                </div>
                <div className="custom-card-text">
                  <h3>PYP Homeroom Teacher</h3>
                  <p>International School Phnom Penh, Cambodia</p>
                  <Button>Find out more</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item animateIn>
              <img width={900} alt="900x500" src={carousel_1}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item animateIn>
              <img width={900} alt="900x500" src={carousel_2}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item animateIn>
              <img width={900} alt="900x500" src={carousel_3}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      </Provider>
    );
  }
}

export default MainDiv;
