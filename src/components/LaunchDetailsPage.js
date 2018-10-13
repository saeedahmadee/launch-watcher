import React from 'react';

const LaunchDetailsPage = (props) => (
    <div>
        This is {props.match.params.id} launch details page.
    </div>
);

export default LaunchDetailsPage;