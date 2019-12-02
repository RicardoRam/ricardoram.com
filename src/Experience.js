import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import "fullpage.js/vendors/scrolloverflow";
import "./Experience.css";


const anchors = ["Finastra", "PHO", "UofT"];

export default (props) => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#FF99FF", "#99FFFF", "#0798ec"]}
    controlArrows={false}
    slidesNavigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="text">
              <div class="slide"> 
                <h1>Finastra - Software Developer Intern</h1>
                <h2><strong>May 2018 - August 2019</strong></h2>
              </div>
              <div class="slide"> 
                <h3>OpenAPI Linter <strong>(Technologies: Kotlin, JavaScript, PostgreSQL, Docker)</strong></h3>
                <ul>
                  <li>Worked on a quality assurance OpenAPI linter enforcing Finastra REST API standards for OpenAPI specifications in an interactive Web UI.  </li>
                  <li>Followed a test-driven development framework to implement Finastra specific rules using Kotlin </li>
                </ul>
              </div>
              <div class="slide"> 
                <h3>BDD Demo Application <strong>(Technologies: Java, SQL Server, Spring, Gherkin, OAuth 2.0)</strong></h3>
                <ul>
                  <li>Developed an innersource application from the ground up with a functional microservice REST API using Spring Framework to demonstrate automated BDD testing using Cucumber </li>
                  <li>Presented and made available to Finastra teams to fast track their learning of BDD testing </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="text">
              <h1>Public Health Ontario - Research Assistant </h1>
              <h2><strong>September 2017 - April 2018 </strong></h2>
              <ul>
                <li>Used tools run on a cluster to assemble and characterize genomic reads from bacteria isolates </li>
                <li>Performed Molecular Serotyping, MLST, and SNP Analysis on WGS data of foodborne pathogens</li>
                <li>Used Gini-Simpson and other heuristics to measure how each analysis distributed the data </li>
                <li>Published in: Draft Genome Sequences of Four Clinical Legionella pneumophila Isolates from Ontario, Canada. Genome Announcements. 2018; 10.1128 </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="text">
              <h1>University of Toronto</h1>
              <h2><strong>September 2014 - November 2019</strong></h2>
              <h3>Honours B.Sc. in Computer Science & Bioinformatics</h3>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

