import React, { useState } from 'react';
import './about.css'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, 
        CarouselCaption } from 'reactstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import {myAdventures} from '../../shared/myAdventures'
import {Image} from 'react-bootstrap'


const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === myAdventures.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? myAdventures.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slides = myAdventures.map((adventure) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={adventure.src}
          >
            <Image className="slide-image" src={adventure.src} alt={adventure.altText} rounded/>
            <CarouselCaption captionText={adventure.caption} captionHeader={adventure.altText} />
          </CarouselItem>
        );
    })

    return(
        <div className="container-fluid about-container">
            <div>
                <Breadcrumb>
                    <Link to="/" className="font-fm">Home</Link>
                    <Breadcrumb.Item/>
                    <Breadcrumb.Item className="font-fm" active>About Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1 className="about-title">About <s>US</s> ME!</h1>
            <div className="row justify-content-center">
                <div className="col-12">
                    <a className="brenno-site" href="https://www.brennolima.com/">Here you can find my professional web site</a>
                </div>
                <div className="col-12">
                    <h4 className="brenno-title">Check out some of my adventures! :D</h4>
                </div>
                <div className="col-12">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        >
                        <CarouselIndicators items={myAdventures} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default About;