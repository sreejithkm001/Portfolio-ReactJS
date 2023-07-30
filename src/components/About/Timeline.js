import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import java from '../../Assets/JAVASCRIPT.png'
import python from '../../Assets/nptel python.jpg'
import dbms from '../../Assets/nptel dbms.jpg'
import git from '../../Assets/GIT.png'
import django from '../../Assets/Django.png'
import { Container } from 'react-bootstrap';


function Timeline() {
  return (
    <Container style={{marginTop:"90px"}}>
      <h4 style={{textAlign:"center",fontSize:"44px",color:"white",marginTop:"110px"}}>CERTIFICATIONS</h4>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={java}
          alt="First slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
          <h3 style={{fontWeight:"bolder"}}>JAVASCRIPT</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={python}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>PYTHON</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={git}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>GIT</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dbms}
          alt="Second slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>Database Management System</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={django}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>Django</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Container>
    );
}

export default Timeline



