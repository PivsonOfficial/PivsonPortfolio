import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import styles from './footer.css';
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
        <div className="pozadi_footer">
            <section id="section5">
            <div className="formular">


        <Form className="GridForm">

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><h2 style={{ color: '#BDFFBC' }} >Napište mi</h2> </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <br></br>
                    <Form.Label><h4>Zde můžete napsat vážené excelenci Pivson</h4></Form.Label>
                    <Form.Control as="textarea" placeholder="¯\_(ツ)_/¯" rows={8}  />
                </Form.Group>
                <Button value="Submit" variant="primary" type="submit">
                    Odeslat
                </Button>
            </Form.Group>


            <div className="Kontakt">
                <h2 style={{ color: '#BDFFBC' }}>Zavolejte mi</h2>

                <h3 >Telefon: +420 606 833 724</h3>
                <h3>Email: pivson.vydra@seznam.cz</h3>

            </div>
        </Form>

            </div>
            </section>

            <hr></hr>
        <footer className="footer  text-center text-lg-start">

            <div className="footer container p-4 ">

                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                        <h5 style={{ color: '#BDFFBC' }} className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#section1" className="link">Domov</a>
                            </li>
                            <li>
                                <a href="#section2" className="link">O mně</a>
                            </li>
                            <li>
                                <a href="#section3" className="link">Mé projekty</a>
                            </li>
                            <li>
                                <a href="#section4" className="link">Skills</a>
                            </li>
                           <li>
                            <a href="#section5" className="link">Kontakt</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5  style={{ color: '#BDFFBC' }} className="text-uppercase mb-0">Socials</h5>
                        <br></br>
                        <ul className="list-unstyled">
                            <li>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><SocialIcon network="discord" /></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><SocialIcon network="github" /></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><SocialIcon network="whatsapp" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="copyright text-center p-3">
                © 2024 Copyright:

                <a className="link" href="#">Pivson </a>
            </div>

        </footer>
        </div>
    );
}

export default Footer;