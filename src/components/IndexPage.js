import React from 'react';
import { Link } from 'react-router-dom'
import LaunchHero from '../components/LaunchHero';
import LaunchList from './LaunchList.js';

const IndexPage = () => (
    <div>
        <LaunchHero />
        <LaunchList listType='nextList' numberOfItems={5} />
        <Link className="list__more" to={`/list`}>
            More
        </Link>
    </div>
);

export default IndexPage;