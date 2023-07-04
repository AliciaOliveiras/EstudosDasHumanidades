import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import Carrossel1 from "../../assets/images/humanidades/carrossel1.png";
import Carrossel2 from "../../assets/images/humanidades/carrossel2.png";
import Carrossel3 from "../../assets/images/humanidades/carrossel3.png";

  
export default function App() {
  return (
    <div style={{ display: 'block', width: '100%', padding: 30 }}>
{/*       <h4>React-Bootstrap Carousel Component</h4> */}
      <Carousel fade>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={Carrossel1}
            alt="Image One"
          />
          <Carousel.Caption>
{/*             <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={Carrossel2}
            alt="Image Two"
          />
          <Carousel.Caption>
{/*             <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={Carrossel3}
            alt="Image Three"
          />
          <Carousel.Caption>
{/*             <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}