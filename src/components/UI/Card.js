import React from "react";
import elclass from './Card.module.css';

function Card (props) {
    return <div className={`${elclass.card} ${props.className}`}>
        {props.children}
    </div>
}
export default Card;