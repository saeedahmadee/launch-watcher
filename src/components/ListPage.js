import React from 'react';
import LaunchList from './LaunchList.js';

const ListPage = () => (
    <div>
        <LaunchList listType='nextList' numberOfItems={10} />
    </div>
);

export default ListPage;