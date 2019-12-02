import React from 'react';

import Pdf from './Pdf';

import './Resume.css';

export default () => {
    return (
        <div className="resume-container">
            <div className="resume-page">
                <Pdf file="/assets/2019_11.pdf"/>
            </div>
        </div>
    )
}
