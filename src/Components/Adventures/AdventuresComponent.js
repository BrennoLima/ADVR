import React from 'react'
import CardItem from '../CardItem'
import './adventures.css'
import {ADVENTURES} from '../../shared/adventures'

const Adventures = () => {
    return(
        <div className="container-fluid trips-container" id="adventures">
            <div className="row row-title justify-content-center">
                <div className="col-12">
                    <h1 className="trips-title">Start your journey here</h1>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <CardItem src={ADVENTURES[0].image} title={ADVENTURES[0].title} 
                    subtitle={ADVENTURES[0].subtitle} text={ADVENTURES[0].text} id={ADVENTURES[0].id}
                    description={ADVENTURES[0].description} type={'adventures'}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={ADVENTURES[1].image} title={ADVENTURES[1].title} 
                    subtitle={ADVENTURES[1].subtitle} text={ADVENTURES[1].text} id={ADVENTURES[1].id}
                    description={ADVENTURES[1].description} type={'adventures'}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={ADVENTURES[2].image} title={ADVENTURES[2].title}
                    subtitle={ADVENTURES[2].subtitle} text={ADVENTURES[2].text} id={ADVENTURES[2].id} 
                    description={ADVENTURES[2].description} type={'adventures'}/>
                </div>
                <div className="col-md-1"/>
                <div className="col-12 col-md-3">
                    <CardItem src={ADVENTURES[3].image} title={ADVENTURES[3].title} 
                    subtitle={ADVENTURES[3].subtitle} text={ADVENTURES[3].text} id={ADVENTURES[3].id}
                    description={ADVENTURES[3].description} type={'adventures'}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={ADVENTURES[4].image} title={ADVENTURES[4].title} 
                    subtitle={ADVENTURES[4].subtitle} text={ADVENTURES[4].text} id={ADVENTURES[4].id}
                    description={ADVENTURES[4].description} type={'adventures'}/>
                </div>  
            </div>
            
        </div>
    );
}

export default Adventures;