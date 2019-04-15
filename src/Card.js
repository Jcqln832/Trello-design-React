import React from 'react';
import './card.css';

export default function Card(props) {
 return (
    <div class="Card">
        <button type="button"></button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
 );
}

// export default Card;