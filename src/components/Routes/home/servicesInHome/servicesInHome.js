import React from 'react'
import {Row,Col,Container } from 'react-bootstrap'
import Hrimage from '../../../../images/ServicesHome/hrimage.jpg';
import Vcimage from '../../../../images/ServicesHome/Vcservices.jpg';
import gymfitness from '../../../../images/ServicesHome/gymfitnessFCM.jpg';
import { Link } from 'react-router-dom';

const ServicesInHome = () => {
    return (
        <>
            <Container fluid className='px-lg-5 pb-3 pt-2' style={{ backgroundColor: '#E8E8E8'}}>
                <div className='p-lg-5 p-sm-1 p-xs-2 d-block' style={{}}>
                    <h2 style={{ 'textAlign': 'center' }}>
                        <span className='p-2' style={{ 'backgroundColor': '' }}>OUR SERVICES</span>
                    </h2>
                    <Row className='mt-lg-4 m-4' style={{ 'height': 'fit-content', 'alignItems': 'center', backgroundSize: 'cover', borderRadius:'30px',background: 'linear-gradient(to left, #ffffff 0%, #0099ff 200%)' }}>
                        <Col lg='8' className='d-none d-lg-block' style={{ height: '60vh', 'alignItems': 'center', backgroundImage: `url(${Hrimage})`, backgroundSize: 'cover', borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px' }}></Col>
                        <Col lg='4' xs='12' className='p-4'style={{ height: 'fit-content' }}>
                            <h2 className='mt-4 text-center'>Human Resources</h2>
                            <div className='m-2'>
                                <p className='mx-3'>We provide following:</p>
                                <ul>
                                    <li>Personal Trainers</li>
                                    <li>Dieticians</li>
                                    <li>Physical Therapists</li>
                                </ul>
                            </div>
                            <Link className='mx-3' to="/humanResources">Read more</Link>
                        </Col>
                    </Row>
                    <Row className="m-4" style={{ 'height': 'fit-content', alignItems: 'center',borderRadius:'30px', background: 'linear-gradient(to left, #663300 0%, #ffffff 100%)', backgroundSize: 'cover' }}>
                        <Col lg='4'  className='p-4' style={{ height: 'fit-content'}}><h2 className='mt-4 text-center'>Facility Design & Management</h2>
                        <div className='m-2 d-flex'>
                                <ul>
                                    <li>Design & Layout</li>
                                    <li>Equipment Procurement</li>
                                    <li>On-site fitness</li>
                                </ul>
                            </div>
                            <Link className='mx-3' to="/facilityMgt">Read more</Link>
                        </Col>
                        <Col lg='8' className='d-none d-lg-block' style={{ height: '60vh', borderBottomRightRadius:'30px',borderTopRightRadius:'30px', backgroundImage: `url(${gymfitness})`, backgroundSize: 'cover' }}></Col>
                    </Row>
                    <Row className="m-4" style={{ 'height': 'fit-content', 'alignItems': 'center', background: 'linear-gradient(to right, #ffffff 0%, #339933 150%)', backgroundSize: 'cover', borderRadius:'30px' }}>
                        <Col lg='8' className='d-none d-lg-block' style={{ height: '60vh', 'alignItems': 'center', backgroundImage: `url(${Vcimage})`, backgroundSize: 'cover', borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px' }}></Col>
                        <Col xs='12' lg='4' className='p-4' style={{ 'height': 'fit-content' }}>
                            <h2 className='mt-4 text-center'>Digital Programming</h2>
                            <div className='m-2 d-flex'>
                                <ul>
                                    <li>Virtual Coaching</li>
                                </ul>
                            </div>
                            <Link className='mx-3' to="/digProg">Read more</Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ServicesInHome
