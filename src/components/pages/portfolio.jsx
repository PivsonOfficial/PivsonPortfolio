import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/world.jpg'
import carousel1 from './images/Ukrajina.jpg'
import carousel2 from './images/cup.jpg'
import carousel3 from './images/code.jpg'
import logo1 from './images/html.jpg'
import logo2 from './images/photoshop.jpg'
import logo3 from './images/blender.png'
import logo4 from './images/csharp.png'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import styles from './_portfolio_styles.css';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);
function Portfolio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (

      <>
          <section id="section1">
              <div className="Homepage">

                  <div  >
                      <Image className="opacity-50" src={img1} fluid>
                      </Image>
                      <div className="animace">
                          <Card style={{ width: '100%', background: '#2B2C28'}}>

                              <Card.Body>

                                  <Card.Text>
                                      <TypeAnimation
                                          sequence={[
                                              'Vítejte na mém portfoliu',
                                              1000,
                                              'Jmenuji se Pivson',
                                              1000,
                                              'Umím programovat, ale i tvořit grafické návrhy',
                                              1000,
                                              'Pokud potřebujete návrháře/programátora napište mi',
                                              1000
                                          ]}

                                          speed={30}
                                          style={{ fontSize: '2em', display: 'inline-block', color: "aliceblue"}}
                                      />
                                  </Card.Text>
                                  <Button href="#section3" variant="primary">Mé projekty</Button>
                              </Card.Body>
                          </Card>
                      </div>
                      <div className="profil">

                          <Container>
                                  <Col xs={6} md={4}>
                                      <Image src={img1} thumbnail />
                                  </Col>
                          </Container>

                      </div>
                  </div>

              </div>
          </section>

          <div>

          </div>

          <section id="section2" >

              <div>
                  <div className="Omne" >
                      <h1 style={{ color: '#BDFFBC' }} className="Omnenadpis page-section-heading text-center ">O mně</h1>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.orem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum reruorem ips, consectetuer adipiscing elit. Itaque earum reru Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent id justo in neque elementum ultrices. Nam quis nulla. Proin mattis lacinia justo. Etiam quis quam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Fusce aliquam vestibulum ipsum. Proin in tellus sit amet nibh dignissim sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tel</h5>
                      <br></br>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.orem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum reruorem ips, consectetuer adipiscing elit. Itaque earum reru Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent id justo in neque elementum ultrices. Nam quis nulla. Proin mattis lacinia justo. Etiam quis quam. Neque porro quisquam est, qui dolorem ipsunam aliquam quaerat voluptatem. Fusce aliquam vestibulum ipsum. Proin in tellus sit amet nibh dignissim sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tel</h5>
                      <br></br>
                      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>

                  </div>
              </div>

          </section>
<div>
    <section id="section3" >
        <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Projekt1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Projekt2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={carousel3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Projekt3</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
</div>

          <section id="section4">
    <div className="projekty" style={{ backgroundColor: '#2B2C28' }}>
        <h1 style={{ color: '#BDFFBC' }} className="skillynadpis page-section-heading text-center">Můj flex</h1>
        <div className="d-flex justify-content-around">
            <motion.div whileHover={{ scale: 1.2 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo1} />
                <Card.Body>
                    <Card.Title>Html</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo2} />
                <Card.Body>
                    <Card.Title>Adobe Photoshop</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo3} />
                <Card.Body>
                    <Card.Title>Blender</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo4} />
                <Card.Body>
                    <Card.Title>Programování C#</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
            </motion.div>
        </div>

    </div>
          </section>
      </>
    );
}

export default Portfolio;

