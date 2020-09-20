import React from 'react'
import './adventuredetail.css'
import {Image} from 'react-bootstrap'
import {ADVENTURES} from '../../shared/adventures'
import {useParams} from 'react-router-dom'

const AdventureDetail = () => {
    const {Id} = useParams();
    const adventure = ADVENTURES.filter((adventure) => adventure.id === parseInt(Id, 10))[0]
    console.log(adventure)

    return(
        <div className="container-fluid adventuredetail-container">
            <div className="row justify-content-center">
                <h1 className="title">{adventure.title}</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 offset-md-1">
                    <Image src={adventure.image} alt={adventure.title} fluid rounded/>
                </div>
                <div className="col-12 col-md-5">
                    <h1 className="subtitle">{adventure.subtitle}</h1>
                    <h5 className="text">{adventure.text}</h5>
                    <h6 className="description">{adventure.description}</h6>
                </div>
            </div>
        </div>
    );

}

export default AdventureDetail;