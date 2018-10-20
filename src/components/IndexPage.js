import React from 'react';
import LaunchHero from '../components/LaunchHero';
import LaunchList from './LaunchList.js';

const IndexPage = () => (
    <div>
        <LaunchHero />
        <br />
        <LaunchList listType='nextList' numberOfItems={5} />
    </div>
);

export default IndexPage;