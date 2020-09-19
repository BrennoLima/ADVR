import React from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const MyLink = styled(Link)`
    color: black;
    &:hover{
        text-decoration: none;
        color: black;
    }
`

function CardItem({src, title, subtitle, text, id, type}){
    return(
        <Card variant="default" className="card_container" key={id}>
            <MyLink to={`/${type}/${id}`}>
                <Card.Img variant="default" top="true" src={src} alt="Diving" className="card_img"/>
                <Card.Body className="card_body">
                    <Card.Title><p className="card_title">{title}</p></Card.Title>
                    <p className="card_subtitle"><strong>{subtitle}</strong></p>
                    <p className="card_text">{text}</p>
                </Card.Body>
            </MyLink>
        </Card>
    );
}

export default CardItem;