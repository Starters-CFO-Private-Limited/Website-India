import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PopConvert from '../leadPages/popConvert';
import Head from 'next/head';
import { WHATSAPP_MESSAGE_NUMBER, WHATSAPP_DISPLAY_NUMBER } from '../../constants';


class Header extends React.Component {
    state = {
        'showPopConvert': false
    };

    togglePopConvert = () => {
        this.setState({
            'showPopConvert': !this.state.showPopConvert
        })
    }

    render() {
        return (
            <>
                <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert}></PopConvert>

                <Head>
                    <meta charSet="utf-8"></meta>

                    {/* favicon */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"></link>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"></link>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"></link>
                    <link rel="shortcut icon" href="/static/favicons/favicon.ico"></link>
                    <link rel="manifest" href="/static/site.webmanifest"></link>
                    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5"></link>
                    <meta name="msapplication-TileColor" content="#603cba"></meta>
                    <meta name="theme-color" content="#ffffff"></meta>

                    {/* meta */}
                    <meta name="title" value="Starter's CFO"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.5.6/plyr.css" integrity="sha256-YVY0cgMlN3Yk6z5+sLnD90gFlKARWzjDwWSnReb0ATI=" crossOrigin="anonymous" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.5.6/plyr.js" integrity="sha256-6tTjuw76/VMeb9+Pve3kdgpAYAnaF9yhAm+6lL/L+4Q=" crossOrigin="anonymous"></script>

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet"></link>

                    {/* css */}
                    <link rel="stylesheet" href="/static/index.css" />

                    {/* viewport  */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"></meta>
                    <meta name="google-site-verification" content="hwGg0k7JuVnA49F784MZXUy6ABXLBXG-OK8On0vglTA" />

                    {/* integrations ( place last ) */}
                    <script src="/static/integrations.js"></script>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5761448.js"></script>
                </Head>

                <div className="w-100">
                    {/* navbar 1 */}
                    <Nav
                        activeKey="/"
                        className="nav__light -1">
                        <div className="container justify-content-between d-flex">
                            <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                                <Nav.Item>
                                    <Nav.Link href={`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=&source=&data=`} target="_blank"><i className="fab fa-whatsapp color__whatsapp mobile__size"></i> <span className="mobile__hide">{WHATSAPP_DISPLAY_NUMBER}</span></Nav.Link>
                                </Nav.Item>
                                <div className="mobile__hide">
                                    |
                                </div>
                                <Nav.Item className="mobile__hide">
                                </Nav.Item>
                                <Nav.Item className="mobile__hide">
                                    <Nav.Link href="/articles" >Blog</Nav.Link>
                                </Nav.Item>
                                <div className="mobile__hide">
                                    |
                                </div>
                                <Nav.Item>
                                    <Nav.Link href="/articles" target="_blank"><a href="https://www.facebook.com/StartersCFO/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/articles" target="_blank"><a href="https://www.linkedin.com/company/starters-cfo/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/articles" target="_blank"><a href="https://twitter.com/CfoStarter" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/articles" target="_blank"><a href="https://www.instagram.com/starterscfo_2016/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></Nav.Link>
                                </Nav.Item>
                            </div>
                            <div style={{ 'display': 'flex' }}>
                                <Button className="btn__primary" onClick={this.togglePopConvert}>Get Started Free</Button>
                            </div>
                        </div>
                    </Nav>

                    {/* navbar 2 */}
                    <Navbar {...this.props} collapseOnSelect expand="lg" className="nav__white" sticky="top">
                        <div className="container justify-content-between d-flex -2">
                            <Navbar.Brand>
                            <Link href="/"><a><img src="/static/images/logos/scfo/scfo-logo.png" alt='starters scfo' className="nav--logo"></img></a></Link>
                                {/* web */}
                                <Link href="/careers"><a><Button className="btn__primary ml-4 py-1 px-2 font__11 rounded__full d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">We're hiring!</Button></a></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Item className="d-xs-block d-sm-block d-md-none mt-2">
                                    <Link href="/careers"><a><Button className="btn__primary py-1 px-2 font__11 rounded__full">We're hiring!</Button></a></Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-link" >
                                        <Nav.Link as={Link} href="/startup-valuation-india">Valuation </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="nav-link">
                                        <Nav.Link as={Link}  href="/virtual-cfo">Virtual CFO </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-link">
                                        <Nav.Link as={Link}  href="/compliances">Compliances </Nav.Link>
                                    </Nav.Item >
                                    <NavDropdown id="collasible-nav-dropdown" title={
                                        <>
                                            Tools <i className="fa fa-caret-down"></i>
                                        </>
                                    }>

                                        <NavDropdown.Item>
                                        <Link href="/tools/incorporation/help"><a>Company Structure Quiz</a></Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown id="collasible-nav-dropdown" title={
                                        <>
                                            Register <i className="fa fa-caret-down"></i>
                                        </>
                                    }>
                                        <NavDropdown.Item><Link href="/company-incorporation"><a>Company</a></Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link href="/trademark-registration"><a>Trademark</a></Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link href="/gst"><a>GST</a></Link> </NavDropdown.Item>
                                        <NavDropdown.Item><Link href="/startup-india-registration"><a>Start up India</a></Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link href="/msme-registration-india"><a>MSME / Udyog Aadhar</a></Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Item className="desktop__hide">
                                        <Nav.Link href="/articles">Blog </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>

                        </div>
                    </Navbar>


                    {/* navbar 3 */}
                    <div {...this.props}>
                        {
                            this.props.promobanner ?
                                <Nav activeKey="/" className="nav__dark nav--offer-banner -3 mobile__hide">
                                    <div className="container">
                                        <Row>
                                            <Col md={9} className="d-flex justify-content-start">
                                                <p className="color__white text-white font__12 text-center" style={{ paddingTop: "8px", marginBottom: "10px" }}>
                                                <Link href="/startup-valuation-india"><a><Button className="btn__attention py-2 px-2 font__11 rounded__full d-none d-md-inline-block d-lg-inline-block d-xl-inline-block">Trending 🙌</Button></a></Link>&nbsp;&nbsp;<span className="color__white font__15">Valuation for start ups. Find out what your organisation is worth!</span>
                                                </p>
                                            </Col>
                                            <Col md={3} className="d-flex justify-content-end text-center">
                                            {/* <Button className="btn__secondary" onClick={() => { window.location = "/startup-valuation-india" }}>Get Started Free</Button> */}
                                            <Link href="/startup-valuation-india"><a><Button className="btn__secondary" >Get Started Free</Button></a></Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </Nav>
                                :
                                <></>
                        }
                    </div>

                </div>
            </>
        )
    }
}

export default Header;
