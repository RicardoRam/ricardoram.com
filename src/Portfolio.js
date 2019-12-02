import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import "fullpage.js/vendors/scrolloverflow";
import "./Portfolio.css"

const anchors = ["FlightStatistics","More"];

export default (props) => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#ff9966", "#FF9999"]}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            
          <div className="section">
            <div className="text">
              <h1><a href="https://intense-citadel-65245.herokuapp.com/">Flight Statistics</a></h1>
              <h5>Login Credentials:</h5> 
              <ul>
                <li>User := Username: user Password: user</li>
                <li>Admin := Username: admin Password: admin</li>
              </ul>
              <p>This web application is intended for users who wish to keep track of various flights and share this information with family and friends.</p>
              <p>Some of the features include browsing and selecting flights, storing flight history, viewing/adding airline reviews, and displaying safety scores for airlines</p>
            </div>
          </div>
          <div className="section">
            <div className="text">
              <h1><a href="https://github.com/RicardoRam/http-proxy">Proxy using Python</a></h1>
            </div>
          </div>
          <div className="section">
            <div className="text">
              <h1>Under Construction... More to come soon!</h1>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
