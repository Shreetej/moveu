import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import Hrimage from '../../../../images/ServicesHome/hrimage.jpg';
import Vcimage from '../../../../images/ServicesHome/Vcservices.jpg';
import gymfitness from '../../../../images/ServicesHome/gymfitnessFCM.jpg';
import { Link } from 'react-router-dom';

const ServicesInHome = () => {
    return (
        <>
            <Container fluid className='pb-4' style={{ background: 'linear-gradient(to right, #ff9966 0%, #ff99cc 100%)'}}>
                <div className='p-4' style={{}}>
                    <h2 style={{ 'textAlign': 'center' }}>
                        <span className='p-2' style={{ 'backgroundColor': '' }}>OUR SERVICES</span>
                    </h2>
                    <Row className='mt-4' style={{ 'height': '60vh', 'alignItems': 'center', backgroundSize: 'cover' }}>
                        <Col xs='8' style={{ height: '60vh', 'alignItems': 'center', backgroundImage: `url(${Hrimage})`, backgroundSize: 'cover' }}></Col>
                        <Col xs='4' className='p-4'style={{ height: '60vh', background: 'linear-gradient(to left, #ffffff 0%, #0099ff 200%)' }}>
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
                    <Row style={{ height: '60vh', alignItems: 'center', backgroundColor: 'azure', backgroundSize: 'cover' }}>
                        <Col xs='4' className='p-4' style={{ height: '60vh', background: 'linear-gradient(to left, #663300 0%, #ffffff 100%)' }}><h2 className='mt-4 text-center'>Facility Design & Management</h2>
                        <div className='m-2'>
                                <ul>
                                    <li>Design & Layout</li>
                                    <li>Equipment Procurement</li>
                                    <li>On-site fitness</li>
                                </ul>
                            </div>
                            <Link className='mx-3' to="/facilityMgt">Read more</Link>
                        </Col>
                        <Col xs='8' style={{ height: '60vh', backgroundImage: `url(${gymfitness})`, backgroundSize: 'cover' }}></Col>
                    </Row>
                    <Row style={{ 'height': '60vh', 'alignItems': 'center', backgroundColor: 'azure', backgroundSize: 'cover' }}>
                        <Col xs='8' style={{ height: '60vh', 'alignItems': 'center', backgroundImage: `url(${Vcimage})`, backgroundSize: 'cover' }}></Col>
                        <Col xs='4' className='p-4' style={{ 'height': '60vh', background: 'linear-gradient(to right, #ffffff 0%, #339933 150%)' }}>
                            <h2 className='mt-4 text-center'>Digital Programming</h2>
                            <div className='m-2'>
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
