import Layout from '../components/Layout';
import '../static/css/styles.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button } from 'reactstrap';
var QRCode = require('qrcode.react');
import PaymentIcon from 'react-payment-icons';
import './aboutus/index';
import { Container, Row, Col } from 'react-grid-system';


const Index = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    return (
        <Layout>
            <center>WAULTO</center>
            
                    
                    {/* <div className="footer">
                        <div >                        
                        <Container>
                            <Row>
                                <Col md={10}>
                                    <div className="footer-text">
                                         AlmostEverything:
                                    </div>
                                    <SocialIcon url="https://www.youtube.com/almost-everything" fgColor="white" bgColor="black" className="icon"/>
                                    <SocialIcon url="https://www.instagram.com/_almost.everything/?hl=en" fgColor="white" bgColor="black" className="icon"/>
                                    <SocialIcon url="https://www.facebook.com/pages/category/Education-Website/Almost-Everything-356325994970583/" bgColor="black" fgColor="white" className="icon"/>
                                    <a href="mailto:queries.almosteverything@gmail.com"><SocialIcon network="mailto" fgColor="white" bgColor="black" className="icon"/></a>
                                </Col>
                                <Col md= {2}>
                                    <div className="footer-dev" >
                                        <a href = "./aboutus">Developed By: </a>          
                                    </div>
                                    <div className="footerwaulto" >
                                        <center><a href = "./aboutus"><img id="ourlogo" src="/waulto.jpg" alt="W A U L T O" width="100" height="40" /></a></center>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        </div>
                    </div> */}
                    
                
        </Layout>
    );
};

export default Index;

