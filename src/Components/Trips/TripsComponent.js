import React from 'react';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import diving from '../../assets/images/diving.png'
import MachuPicchu from '../../assets/images/MachuPicchu1.png'

import './trips.css'



const Trips = () => {
    return(
        <div className="container-fluid trips-container">
            <div className="row row-title">
                <div className="col-12">
                    <h1 className="trips-title">Start your journey here</h1>
                </div>
            </div>
            <div className="row row-cards">
                <div className="col-12 col-md-3 offset-md-3">
                    <Card variant="default" className="card_container">
                        <Card.Img variant="default" top="true" src={diving} alt="Diving" className="card_img"/>
                        <Card.Body className="card_body">
                            <Card.Title><p className="card_title">Great Barrier Reef</p></Card.Title>
                            <p className="card_subtitle"><strong>SEA LOVER?</strong></p>
                            <p className="card_text">Explore the world's largest coral reef system in Australia</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-3">
                    <Card variant="default" className="card_container">
                        <Card.Img variant="default" top="true" src={MachuPicchu} alt="MachuPicchu" className="card_img"/>
                        <Card.Body className="card_body">
                            <Card.Title><p className="card_title">Machu Picchu</p></Card.Title>
                            <p className="card_subtitle"><strong>A TRAVEL TO THE PAST</strong></p>
                            <p className="card_text">Find out more about the mysterious Incan civilization.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default Trips;