import React from 'react';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
// import ContainerFluid from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Div from 'react-bootstrap/Col';
import Layout from '../components/site/layout';
import PopConvert from '../components/leadPages/popConvert';
import ExitConvert from '../components/leadPages/exitConvert';
import Button from 'react-bootstrap/Button';
import Meta from '../components/site/meta';
import FAQ from '../components/leadPages/faq';
import PerksV2 from '../components/leadPages/perksV2';
import { VALUATION_FAQ } from "../content/valuation_faq";
// import DigitallyEnabled from "../components/leadPages/digitallyEnabled";
// import NumbersSpeak from '../components/leadPages/numbersSpeak';


import { BUSINESS_VARITION_ACCORDION } from "../content/business_valution_accordion";
// import SliderComponent from '../components/Slider'
// import SliderComponenttwo from '../components/Slidertwo'
import VALUATIONFORM from '../components/valuation/valuationform';
import INFORMATIONFORM from '../components/valuation/informationform';

import ValuationSlider from '../components/valuation/valuationSlider';
import ValuationSliderTwo from '../components/valuation/ValuationSliderTwo';
import ValuationServices from '../components/valuation/ValuationServices';
import ConsultantPlans from '../components/valuation/ConsultationPlans';
import PartnersLogo from '../components/valuation/PartnersLogo';

import FormIframe from '../components/leadPages/formIframe';


class Valuation extends React.Component {

    state = {
        'showPopConvert': false,
        'buttonText': 'Submit',
        'convertSuccess': '',
    }

    togglePopConvert() {
        this.setState({
            'showPopConvert': !this.state.showPopConvert,
            'mobile': '',
        })
    }

    constructor(props, context) {
        super(props, context);
        this.togglePopConvert = this.togglePopConvert.bind(this);
    }

    render() {

        return (

            <>
            <link rel="stylesheet" href="/static/valuation.css" />
				
                <Meta title="Start up Valuation in India" description="Find out your Startup Valuation / Business Valuation with help of our business valuation services."></Meta>


                <Layout promobanner={false}>

                    <PopConvert show={this.state.showPopConvert} onHide={this.togglePopConvert} product={'valuation'} mobile={this.state.mobile}></PopConvert>
                    <ExitConvert></ExitConvert>

                    <div className="d-none d-md-block d-lg-block d-xl-block w-100">
                        <div className="hero--wrapper startup_potential">
                            <div className="d-flex align-items-start h-100">
                                <Container className="h-100">
                                    <Col> <div className='pt-5 '>
                                        <p className='color__dark'> <Button className="btn__primary rounded-pill" style={{ marginRight: "10px;" }} onClick={this.togglePopConvert}>Tranding </Button>Valuation for start ups & SMES! Unlock the true potential Of your business</p>
                                    </div></Col>
                                    <Row className="hero__text -no-margin h-100 pt-3">
                                        <Col>

                                            <div style={{ marginTop: "50px 0;" }}>
                                                <h4 className="title">What is your startup 
                                                worth?</h4>
                                                <h4 className="color__white">Seamless valuation services from Starters' CFO<br></br><br></br></h4>
                                                <p className="description">
                                                    <ul className="card__list">
                                                        <li><i className="fa fa-check"></i>&nbsp;  Valuation for regulatory purposes</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;  Valuation for investment pitches</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;  Clear & details valuation reports for negotiations</li>
                                                        <li><i className="fa fa-check"></i>&nbsp;  Trusted by 1000+ happy customers</li>

                                                    </ul>
                                                </p>
                                                <Button className="btn__primary large mb-3" onClick={this.togglePopConvert}>Instant Meeting</Button>
                                                <div className='happy_client'>
                                                  <div className='happy'>
                                                     <span>Happy Clients</span>
                                                     <h4>1000 +</h4>
                                                  </div>
                                                  <div className='happy'>
                                                  <span>Top Advisor</span>
                                                     <h4>74 +</h4>
                                                  </div>
                                                  <div className='happy'>
                                                  <span>New Cases</span>
                                                     <h4>100 +</h4>
                                                  </div>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col className="d-flex align-items-center h-100">
                                         <VALUATIONFORM product={'valuation'} title={'Get on Board'} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <div className="d-xs-block d-sm-block d-md-none w-100">
                        <div className="hero--wrapper -mobile">
                            <div className="hero__background d-flex align-items-start -mobile">
                                <Container>
                                    <Row className="hero__text">
                                        <Col>
                                            <h4 className="title">What is your startup worth?</h4>
                                            <h4 className="color__white">Seamless valuation services from Starters' CFO <br></br><br></br></h4>
                                            <p className="description">
                                                <ul className="card__list">
                                                    <li><i className="fa fa-check"></i>&nbsp; Valuation for regulatory purposes</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Valuation for investment pitches</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Clear & details valuation reports for negotiations</li>
                                                    <li><i className="fa fa-check"></i>&nbsp; Trusted by 1000+ happy customers</li>
                                                </ul>
                                            </p>
                                            <Row style={{ alignItems: 'center', flexWrap: 'nowrap'}}>
                                            {/* <div className='buttonstop'> */}
                                            <Col>

                                            <Button style={{ width: '165px'}} className="btn__primary large" onClick={this.togglePopConvert}>Get started</Button>
                                            </Col>
                                            <Col>
                                            <Link href="/contact"><a><Button style={{ width: '165px'}} className="btn__primary large">Contact Us</Button></a></Link>
                                            </Col>

                                            {/* </div> */}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="grass"></div>
                    </div>

                    <div className="w-100 business_valuation ">
                        <div className="-white">
                            <Container>
                                <Row className="hero__text text-center">
                                    <Col>
                                        <h4 className="color__dark text-center font__40 weight__700">Business Valuation Services</h4>
                                        <br></br>
                                        <Row>
                                            <Col md={{ 'span': '8', 'offset': '2' }}>
                                                <p className=" text-center color__dark">"Yesterday" was the right time to have an independent business valuation for your company by an independent business valuer. And tomorrow will be late. The need for a business valuation arises for several reasons: incoming investors, financial strategy, business planning, business sale, founder exit, public offering, or net worth certification.</p>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className='buss_acoordian'>
                                                    <FAQ faq={BUSINESS_VARITION_ACCORDION}></FAQ>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='mt-5 mb-3'>
                                                <h4 className="color__dark text-center font__40 weight__700">Valuation Services by <span className='valu_serv' style={{ color: "#4c5e9e" }}> Starters' CFO</span> </h4>
                                                <p className=" text-center color__dark">Selecet the category Of service you need and also get to know the details included with
                                                    this category</p>

                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
<Col className='valuation_services'>   
                 <Container className='sec_3'>
                       

                        <Row style={{alignItems:"center;"}}>
                            <Col sm={12} md={4} className="text-center ">
                              
                                    <Row style={{alignItems:"center;"}} className='thr yello_theme_b rounded-pill'>
                                        <Col className='first_v'>
                                        <div className='first_v_img'>
                                        <img  src="/static/images/illustrations/funding.png" style={{ height: "100px" }}></img>
                                        </div>
                                        <div className='find_thee'>
                                                <h6>Lorem ipsum dolor sit Lorem Lorem Lorem</h6>
                                                <p style={{fontSize:"12px"}}> Lorem ipsum dolor sit

                                                </p>
                                                <div className='text-left'>                                <Button className="btn__primary rounded-pill text-left" style={{ marginRight: "10px;"}} onClick={this.togglePopConvert}>Get Started </Button>
                                </div>
                                        </div></Col>
                                    </Row>


                              
                            </Col>

                            <Col sm={12} md={4} className="text-center d-none d-md-block d-lg-block d-xl-block">
                                <div className='valution_secbox'>  <img className="text-center" src="/static/images/icons/valutaion2.png" ></img>
                              
                                <h5 className="text-left" >    Lorem ipsum dolor sit.</h5>
                                <p className=" text-justify" style={{fontSize:"12px"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aperiam accusantium excepturi facilis est tempore eos. Dolores, reprehenderit eaque?
                                </p>
                                <div className='text-left'>                                <Button className="yello_theme_b text-left" style={{ marginRight: "10px;"}} onClick={this.togglePopConvert}>Find more </Button>
                                </div>
                                </div>

                            </Col>
                            <Col sm={12} md={4} className="text-center d-none d-md-block d-lg-block d-xl-block">
                            <div className='valution_secbox'>  
                                <img className="text-center"  src="/static/images/icons/valutaion2.png" ></img>
                              
                                <h5 className="text-left" >    Lorem ipsum dolor sit.
</h5>
                                <p className="text-justify" style={{fontSize:"12px"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id aperiam accusantium excepturi facilis est tempore eos. Dolores, reprehenderit eaque?
                                </p>
                                <div className='text-left'>        <Button className="yello_theme_b text-left" style={{ marginRight: "10px;"}} onClick={this.togglePopConvert}>Find more </Button>
                                </div>
</div>
                            </Col>
                           
                           
                        </Row>
                       
                        <Row style={{alignItems:"center;"}} className="valuationservices d-xs-block d-sm-block d-md-none w-100">
                          
                           <Col sm={12} md={12} >
                           <ValuationServices /> 
                           </Col>
                           
                        </Row>
                       

                        <Row style={{ marginTop: '20px' }}></Row>
                    </Container>
                    </Col>




                 

                    <Container>
                        

                        <Row className='info_professional'>
                            <Col sm={12} md={6}>
                                <div>
                                    
                                </div>
                                <img src="/static/images/banner/info_profession.png" className="" ></img>
                            </Col>
                            <Col sm={12} md={6}>
                                <h4 className='pt-2'>Valuation for regulatory purposes</h4>
                                <p className="font__20 color__dark">
                                    Regulatory Valuations are required under Companies Act, Income Tax Act, FEMA, SEBI Regulations, Insolvency & Bankruptcy Code, IND-AS (Financial Reporting).
                                    <br></br>
                                    <br></br>
                                    Different regulators in India have prescribed different, and at some places even contradictory, valuation requirements to be applied in specific situations. In addition to applicable laws & regulations, more recently, some regulators have also prescribed valuation to be conducted as per internationally accepted valuation guidelines.
                                    <br></br>
                                    <br></br>
                                    Starters' CFO  helps companies to navigate this environment of changing laws and regulations by offering skilled expertise for forming strategy and defending valuation positions by working in closely with Companies’ Board and Management and their tax and legal advisors to provide valuations services required under various laws and regulations.
                                </p>
                            </Col>
                        </Row>
                 </Container>
                 <Col className='card_slider_re'>
                        <Container >
                            <Row  >
                            <Col>
                            <h4 className='weight__600'>Read the Articles about Valuation Methods</h4>                            </Col>
                            <Col className='text-right'><h6   style={{ color:"rgb(76, 94,158)"}}>View more</h6></Col>
                            </Row>
                            
                            <Row style={{ marginTop: '70px' }}>
                                <Col >
                              <ValuationSlider />  
                                </Col>
                            </Row>
                        </Container>
                        </Col>

                   
{/* card slideetwo  */}
                         <div className='card_slider_re2'>
                            <Container>
                            <Row className='heading_cards_slider'>
                            <Col>
                            
                            <h4 className='weight__600'>What Our Users <span className='valu_serv' style={{ color: "#4c5e9e" }}>Say About Us</span></h4>             
                                           </Col>
                            <Col className='text-right'><h6   style={{ color:"rgb(76, 94,158)"}}>View more</h6></Col>
                            </Row>
                           </Container>
                            <div className='container-fluid '>
                            <Row style={{ marginTop: '50px' }}>
                                <Col >
                               <ValuationSliderTwo /> 
                                </Col>
                            </Row>
                            </div>
                            </div>

                       <div className='partners_sec'>
                        <Container>
                        <Row>
                        <Col className=''>
                                                <h4 className="text-center font__40 ">Partners We're <span className='valu_serv' style={{ color: "#4c5e9e" }}>Helping To Grow</span> </h4>
                        </Col>

                        <Col sm={12} md={12}>
                            <div className='part_logo  d-none d-md-block d-lg-block d-xl-block'>
                            <img src="/static/images/logos/Freshbooks.png" alt="Logo"></img>
                            <img src="/static/images/logos/Shopify.png" alt="Logo"></img>
                            <img src="/static/images/logos/Gusto.png" alt="Logo"></img>
                            <img src="/static/images/logos/Freshbooks.png" alt="Logo"></img>
                            <img src="/static/images/logos/Shopify.png" alt="Logo"></img>
                            <img src="/static/images/logos/Gusto.png" alt="Logo"></img>

                            </div>
                            <div className='mobilepartner text-center d-xs-block d-sm-block d-md-none w-100'>
                            <PartnersLogo /> 
                            </div>
                        </Col>                           
                        </Row>

                        </Container>
                        </div> 

                        <Container>
                            <Row>
                                <Col sm={12} md={12}>
                                    <Div className="contact_reach text-center">
                                <h4 className="text-center font__40 ">Reach OUt To Us For<span className='valu_serv' style={{ color: "#4c5e9e" }}> Consultation</span> </h4>
                                <h6 className='weight__600 pt-3'>Consult with us today free!</h6>
                                <Div sm={8} md={8} className='mx-auto'>
                                <p className=''>No payments are required before you start speaking to us! Consult with us for free, and
have all your questions answered before you make any commitments.</p>
                                <p className='pt-3'>No payments are required before you start speaking to us! Consult with us for free, and
have all your <span className='weight__600 '>questions answered before</span> you make any commitments.</p>
</Div>

                                </Div>
                                </Col>
                            </Row>
                        </Container>

                    <Container>
                        <Row className=' d-none d-md-flex d-lg-flex d-xl-flex'>
                            <Col sm={4} md={4}><Div className='plan_price_bo'>
                            <div className='text-center'>
                               
                                <h4 className='weight__600'>Customized Plan</h4>
                                </div>
                                <ul>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                   

                                </ul>
                                <p className='text-justify'>Advance Payment to get
                                    started with Starters' CFO
                                    Consultant</p>
                                <button type="button" className="btn__primary  mb-3 btn btn-primary">Get Started</button>

                            </Div></Col>
                            <Col sm={4} md={4}><Div className='plan_price_bo'>
                                <div className='text-center'>
                                <h4 className='weight__600'>Basic Plan</h4>
                                <h6 className='weight__600'>Rs. 30,000/-</h6>
                                </div>
                                
                                <ul>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                   

                                </ul>
                                <p className='text-justify'>Advance Payment to get
                                    started with Starters' CFO
                                    Consultant</p>
                                <button type="button" className="btn__primary  mb-3 btn btn-primary">Rs. 3,000/-</button>

                            </Div></Col>
                            <Col sm={4} md={4}><Div className='plan_price_bo'>
                            <div className='text-center'>
                                <h4 className='weight__600'>Advanced Plan</h4>
                                <h6 className='weight__600'>Rs. 60,000/-</h6>
                                </div>
                                <ul>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                    <li>Get Startup Valuationb Certificate</li>
                                   

                                </ul>
                                <p className='text-justify'>Advance Payment to get
                                    started with Starters' CFO
                                    Consultant</p>
                                <button type="button" className="btn__primary  mb-3 btn btn-primary">Rs. 6,000/-</button>

                            </Div></Col>


                        </Row>
                        <Row className='consultantplan text-center d-xs-block d-sm-block d-md-none w-100' style={{margin: 'auto'}}>
                            <Col sm={12} md={12}>
                                  <ConsultantPlans /> 
                            </Col>


                        </Row>
                    </Container>
              


 
                    <Row >
                        <Col>
                            <Container className='informationneed'>
                                <INFORMATIONFORM product={'valuation'}></INFORMATIONFORM>
                            </Container>
                        </Col>
                    </Row>

                    
                    <PerksV2 />


                    <Container>
                        <Row className="hero__text">
                            <Col>
                                <h4 className="color__dark text-center font__40">Frequently Asked <span className='valu_serv' style={{ color: "#4c5e9e" }}>Questions</span></h4>
                                <br></br>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '10px' }}>
                            <Col sm={12} md={12}>
                                <FAQ faq={VALUATION_FAQ}></FAQ>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}></Row>
                    </Container>


                    <div id="fb-root"></div>
                    <div className="fb-customerchat"
                        attribution="setup_tool"
                        page_id="827013777421580">
                    </div>

                </Layout>
            </>
        );
    }
}

export default Valuation;