import React from 'react'
import './tripdetail.css'
import {Image} from 'react-bootstrap'
import {TRIPS} from '../../shared/trips'
import {useParams} from 'react-router-dom'

const TripDetail = () => {
    const {Id} = useParams();
    const trip = TRIPS.filter((trip) => trip.id === parseInt(Id, 10))[0]
    console.log(trip)


    return(
        <div className="container-fluid tripdetail-container">
            <div className="row justify-content-center">
                <h1 className="title">{trip.title}</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 offset-md-1">
                    <Image src={trip.image} fluid rounded/>
                </div>
                <div className="col-12 col-md-5">
                    <h1 className="subtitle">{trip.subtitle}</h1>
                    <h5 className="text">{trip.text}</h5>
                    <h6 className="description">{trip.description}</h6>
                </div>
            </div>
        </div>
    );

}

export default TripDetail;