import React from 'react';
import CardItem from '../CardItem'
import '../Adventures/adventures.css'
import {TRIPS} from '../../shared/trips'

const Trips = () => {
    console.log(TRIPS)
    return(
        <div className="container-fluid trips-container" id="trips">
            <div className="row row-title justify-content-center">
                <div className="col-12">
                    <h1 className="trips-title2">Looking for something more serene?</h1>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <CardItem src={TRIPS[0].image} title={TRIPS[0].title}
                    subtitle={TRIPS[0].subtitle} text={TRIPS[0].text} id={TRIPS[0].id} type={'trips'}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={TRIPS[1].image} title={TRIPS[1].title} 
                    subtitle={TRIPS[1].subtitle} text={TRIPS[1].text} id={TRIPS[1].id} type={'trips'}/>
                </div> 
                <div className="col-12 col-md-3">
                    <CardItem src={TRIPS[2].image} title={TRIPS[2].title} 
                    subtitle={TRIPS[2].subtitle} text={TRIPS[2].text} id={TRIPS[2].id} type={'trips'}/>
                </div>
                <div className="col-md-1"/>
                <div className="col-12 col-md-3">
                    <CardItem src={TRIPS[3].image} title={TRIPS[3].title} 
                    subtitle={TRIPS[3].subtitle} text={TRIPS[3].text} id={TRIPS[3].id} type={'trips'}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={TRIPS[4].image} title={TRIPS[4].title} 
                    subtitle={TRIPS[4].subtitle} text={TRIPS[4].text} id={TRIPS[4].id} type={'trips'}/>
                </div>  
            </div>
        </div>
    );
}

export default Trips;