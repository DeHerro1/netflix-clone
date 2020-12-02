import React from 'react';
import tv1 from '../../assets/tv1.png';
import tv2 from '../../assets/tv2.jpg';
import tv3 from '../../assets/tv3.png';
import InnerSection from './InnerSection/InnerSection';

const secondSection = () => (
    <div>
        <InnerSection
            h1="Enjoy on your TV."
            p="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            image={tv1}
        />
        <InnerSection
            image={tv2}
            h1="Download your shows to watch offline."
            p="Save your favorites easily and always have something to watch."

        />
        <InnerSection
            h1="Watch everywhere."
            p="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
            image={tv3}
        />

    </div>
);

export default secondSection;