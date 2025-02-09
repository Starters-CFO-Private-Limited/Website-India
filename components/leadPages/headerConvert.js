import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormValidation } from 'calidation';
import TestimonialsSlider from "./testimonialsSlider";
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE_NUMBER } from "../../constants";
import FormIframe from './formIframe';

const FORM_CONFIG = {
    full_name: {
        isRequired: {
            message: 'Full name is a required field.'
        },
    },
    mobile: {
        isRequired: {
            message: 'Mobile is a required field.'
        },
        isExactLength: {
            message: 'Mobile number must have exactly 10 digits.',
            length: 10,
        },
        isRegexMatch: {
            message: 'Mobile numbers can only contain digits.',
            regex: /^\d{10}$/,
        },
    },
    email: {
        isRequired: {
            message: 'Email is a required field.'
        },
        isEmail: { message: 'Please enter a valid e-mail address' },
    },
};


export default class HeaderConvert extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': ''
    }


    render() {
        const {
            title
        } = this.props;

        return (
            <React.Fragment>
                <Container>
                    <Row className="hero__text">
                        <Col className="text-center">
                            <h4 className="title color__dark text-center">{title}</h4>
                            <span className="color__light-grey text-center font--15">Start up India Helpline <a href={"tel:" + WHATSAPP_MESSAGE_NUMBER} className="font__15 color__light-grey">{WHATSAPP_DISPLAY_NUMBER}</a></span>
                            <br></br>
                            <br></br>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <Card className="mt-md-5">
                                <Card.Body style={{ 'backgroundColor': '#f3f8fb' }}>
                                    {
                                        this.state.convertSuccess ? <>
                                            <p>
                                                <Row className="text-center">
                                                    <Col>
                                                        <h4 className="color__dark font__15">WhatsApp us directly at</h4>
                                                        <span className="color__scfo font__30 mobile_font__15"><i className="fab fa-whatsapp"></i>&nbsp; {WHATSAPP_DISPLAY_NUMBER}</span>
                                                        <br></br>
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                We've received your message. We can't wait to get started!
                                                We will reach out in the next 30 - 90 minutes. You can call us if you need a faster response.
                                                <br></br><br></br>
                                                <span className="color__grey">
                                                    WhatsApp us at <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp color__whatsapp"></i>{WHATSAPP_DISPLAY_NUMBER}</a>
                                                    <br></br>
                                                    Email us at info@starterscfo.in
                                                    <br></br>
                                                    Chat with us, look for chat bubble in the bottom right corner of the screen.
                                                </span>
                                            </p>
                                        </> :
                                            <> 
                                            <FormIframe 
                                            title="Register with Startup India"
                                            whatsapp="true" 
                                            footerText="" />

                                            </> 
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6}>

                            {/* mobile rating */}
                            <Row className="mt-4 d-xs-flex d-sm-flex d-md-none">
                                <Col className="d-flex justify-content-center flex-column align-items-center">
                                    <i className="fab fa-facebook font__50" style={{ color: '#3a5997' }}></i>
                                    <br></br>
                                    <h4 className="color__grey d-block">4.7 / 5</h4>
                                    <div className="color__scfo d-flex flex-row">
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star-half-alt d-block mr-1 font__10"></i>
                                    </div>
                                </Col>
                                <Col className="d-flex flex-column align-items-center justify-content-center">
                                    <img src="/static/images/icons/google.png" alt='google' width={'50px'}></img>
                                    <br></br>
                                    <h4 className="color__grey d-block">5 / 5</h4>
                                    <div className="color__scfo d-flex flex-row">
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                    </div>
                                </Col>
                            </Row>

                            {/* desktop rating */}
                            <Row className="mt-5 d-none d-md-flex d-lg-flex d-xl-flex">
                                <Col className="d-flex justify-content-right">
                                    <i className="fab fa-facebook font__50" style={{ color: '#3a5997' }}></i>
                                </Col>
                                <Col className="d-flex justify-content-left flex-column">
                                    <h4 className="color__grey d-block">4.7 / 5</h4>
                                    <div className="color__scfo d-flex flex-row">
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star-half-alt d-block mr-1 font__10"></i>
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-end">
                                    <img src="/static/images/icons/google.png" alt='google' height={'50px'}></img>
                                </Col>
                                <Col className="d-flex justify-content-left flex-column">
                                    <h4 className="color__grey d-block">5 / 5</h4>
                                    <div className="color__scfo d-flex flex-row">
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                        <i className="fa fa-star d-block mr-1 font__10"></i>
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6} lg={6} xl={6}>
                                    <h5 className="color__grey font__15 text-center mt-3">Highest rated amongst competitors.</h5>
                                </Col>
                                <Col></Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col>
                                    <h5 className="color__grey font__20 mt-3">Over 3000+ clients served to date.</h5>
                                    <div>
                                        <TestimonialsSlider />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}