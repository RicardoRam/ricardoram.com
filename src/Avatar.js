import React from 'react';

import './Avatar.css';

export default (props) => {
    return (
        <img src={props.src} alt={props.name} className={props.state}/>
    )
}