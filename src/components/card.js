import React from 'react'
import './card.css'
import { Link, Redirect } from 'react-router-dom';

const Card = props => (
    <Redirect to ={props.link}>
    <div className="Card">

        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
    </Redirect>
)

export default Card
