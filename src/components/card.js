import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';

const Card = props => (
    <Link to ={props.link}>
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
    </Link>
)

export default Card
