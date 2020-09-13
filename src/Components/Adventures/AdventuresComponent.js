import React from 'react';
import Everest from '../../assets/images/Everest1.jpg'
import Climbing from '../../assets/images/Climbing2.png'
import Volcano from '../../assets/images/Volcano3.png'
import Forest from '../../assets/images/Forest2.png'
import Skydiving from '../../assets/images/Skydiving.png'
import CardItem from '../CardItem'
import './adventures.css'

const Adventures = () => {
    return(
        <div className="container-fluid trips-container" id="adventures">
            <div className="row row-title justify-content-center">
                <div className="col-12">
                    <h1 className="trips-title">Start your journey here</h1>
                </div>
                <div className="col-12 col-md-3 offset-md-1">
                    <CardItem src={Everest} title={'Everest Expedition'} subtitle={'THE TOP OF THE WORLD'} text={"Meet your greatest challenge"}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={Volcano} title={'Kīlauea Volcano'} subtitle={"TRUE EARTH'S WARMTH"} text={"Witness the power of Hawaii's only volcano"}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={Skydiving} title={'Sky Diving'} subtitle={'ABOVE THE CLOUDS'} text={"Fulfill your dream of flying"}/>
                </div>
                <div className="col-md-1"/>
                <div className="col-12 col-md-3">
                    <CardItem src={Forest} title={'Amazon Tour'} subtitle={'BECOME ONE WITH NATURE'} text={"Dig into the world's larget tropical rainforest"}/>
                </div>
                <div className="col-12 col-md-3">
                    <CardItem src={Climbing} title={'Grand Canyon'} subtitle={'CONQUER THE GIGANTIC'} text={"Climb the iconic Arizona Canyon"}/>
                </div>  
            </div>
            
        </div>
    );
}

export default Adventures;