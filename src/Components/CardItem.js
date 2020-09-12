import React from 'react';
import Card from 'react-bootstrap/Card'

function CardItem({src, title, subtitle, text}){
    return(
        <Card variant="default" className="card_container">
            <Card.Img variant="default" top="true" src={src} alt="Diving" className="card_img"/>
            <Card.Body className="card_body">
                <Card.Title><p className="card_title">{title}</p></Card.Title>
                <p className="card_subtitle"><strong>{subtitle}</strong></p>
                <p className="card_text">{text}</p>
            </Card.Body>
        </Card>
    );
}

export default CardItem;