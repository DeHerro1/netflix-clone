import React from 'react';
import './InnerSection.css';

const innerSection = (props) => (
    <div className="InnerSection">
        <section className="firstSec">
            <h1 className="h1">{props.h1}</h1>
            <p className="p" >{props.p}</p>
        </section>
        <section className="secondSec">
            <img src={props.image} className="images" />
        </section>

    </div>
);

export default innerSection;