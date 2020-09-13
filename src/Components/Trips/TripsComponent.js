import React from 'react';
import diving from '../../assets/images/diving.png'
import MachuPicchu from '../../assets/images/MachuPicchu1.png'
import Banff from '../../assets/images/banff2.png'
import TajMahal from '../../assets/images/TajMahal2.png'
import Egypt from '../../assets/images/Egypt2.png'
import CardItem from '../CardItem'
import '../Adventures/adventures.css'

const Trips = () => {
    return(
        <div className="container-fluid trips-container" id="trips">
            <div className="row row-title justify-content-center">
                <div className="col-12">
                    <h1 className="trips-title2">Looking for something more serene?</h1>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <CardItem src={Banff} title={'Lake Louise'} subtitle={'CANADIAN HIDDEN GEM'} text={"Glance at Banff's breathtaking landscaping"}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={TajMahal} title={'Taj Mahal'} subtitle={"A WONDER OF THE WORLD"} text={"Sense the architecture perfection"}/>
                </div> 
                <div className="col-12 col-md-3">
                    <CardItem src={diving} title={'Great Barrier Reef'} subtitle={'INTO THE DEPTHS'} text={"Explore the world's largest coral reef system"}/>
                </div>
                <div className="col-md-1"/>
                <div className="col-12 col-md-3">
                    <CardItem src={MachuPicchu} title={'Machu Picchu'} subtitle={'A TRAVEL TO THE PAST'} text={"Undercove the mysterious Incan civilization."}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={Egypt} title={'Ginza Pyramids'} subtitle={"THE PHARAOH'S REST"} text={"Learn the ancient history of Egypt"}/>
                </div>  
            </div>
        </div>
        
    );
}

export default Trips;