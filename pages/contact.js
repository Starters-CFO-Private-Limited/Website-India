import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Layout from '../components/site/layout';
import { FormValidation } from 'calidation';
import Meta from '../components/site/meta';
import { WHATSAPP_DISPLAY_NUMBER } from '../constants';

class Contact extends React.Component {

	state = {
		'buttonText': 'Submit',
		'submitSuccess': ''
	};

	render() {

		const formConfig = {
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
			message: {
				isRequired: {
					message: 'Message is a required field.'
				},
			},
		};

		const onSubmit = async ({ fields, isValid }) => {
			if (isValid) {
				this.setState({ 'buttonText': 'Processing...' });
				console.log('start')
				const response = await fetch('/api/v1/leads/', {
					'body': JSON.stringify({
						"full_name": fields.full_name,
						"email": fields.email,
						"mobile": fields.mobile
					}),
					'method': 'POST',
					'headers': {
						"cache-control": "no-cache",
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
				console.log(response);

				if (response.ok) {
					// json = await response.json();
				} else {
					response.text().then(result => { console.log(result) });
				}

				this.setState({
					'submitSuccess': 'x',
				})
			}
		};

		return (
			<>
				<Layout promobanner={true}>
					<link rel="stylesheet" href="/static/contact.css" />
					<Meta title="Contact" description="Starters' CFO Support - available monday to saturday, 10:00 AM to 6:00 PM"></Meta>

					<Container>

						<Row style={{ marginTop: '50px' }}></Row>
						<Row>
							<Col md={{ 'span': '5', 'offset': '1' }} sm={{ 'span': '6' }}>
								<Card className="mt-2">
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<i className="fas fa-phone-volume font__50 color__scfo"></i>
												<br></br><br></br>
												<h4 className="color__dark title">Whatsapp us directly at</h4>
												<span className="color__dark font__15">{WHATSAPP_DISPLAY_NUMBER}</span>
												<br></br><br></br>
												<a href="tel:01141183815" className="btn__primary btn btn-primary btn-sm">Call us</a>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
							<Col md={{ 'span': '5' }} sm={{ 'span': '6' }}>
								<Card className="mt-2">
									<Card.Body style={{ paddingTop: '50px', paddingLeft: '30px', paddingRight: '30px' }}>
										<Row className="text-center">
											<Col>
												<i className="fas fa-comments font__50 color__scfo"></i>
												<br></br><br></br>
												<h4 className="color__dark title">Chat with our sales team</h4>
												<span className="color__dark font__15">Monday to Friday, 10:00 AM to 6:00 PM</span>
												<br></br><br></br>
												<a href="https://m.me/StartersCFO" className="btn__primary btn btn-primary btn-sm" target="_blank" rel="noreferrer">Chat with us</a>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>

						<Row style={{ height: '50px' }} className="d-none d-md-flex"></Row>

						<Row>
							<Col md={{ 'span': 10, 'offset': 1 }}>
								<Card className="mt-2">
									<Card.Body className="d-flex custom_wid" style={{ paddingTop: '50px' }}>
										<Col md={12} className="text-center">
											<div className="heading_meeting">
												<h4 className="color__dark mar-top">Send a message</h4>
												<p className="color__grey font__15">
													Pick a date that works for you to see available times to meet with one of our sales representatives.
													<br></br>
												</p>
											</div>
											<br></br>
											<Row>
												<Col md={12} className="text-left">
													<div className="form_content">
														<div className="form_start">
														<iframe
															width="100%" 
															height="300"
															src="https://crm.starterscfo.com/forms/wtl/b56e9ff27f8b8b45c8be967db7edc920"
															frameborder="0"
															sandbox="allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups" 
															allowfullscreen>
														</iframe>			
														
														<br></br>
														<p className="color__light-grey font__10">
														By creating an account with Starter's CFO, you agree to our <a href="">terms</a> and <a href="">privacy policy</a>.
														</p>
															
														</div>
													</div>
												</Col>
											</Row>
										</Col>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row style={{ marginTop: '40px' }}></Row>


					</Container>
				</Layout>
			</>
		);
	}
}

export default Contact;
