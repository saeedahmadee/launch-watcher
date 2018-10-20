import React, { Component } from 'react';
import LaunchList from './LaunchList.js';

class LaunchDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: props.match.params.startDate ? props.match.params.startDate : '',
            endDate: props.match.params.endDate ? props.match.params.endDate : '',
        };
    }
    render() {
        return (
            <div>
                <LaunchList listType='dateRange' startDate={this.state.startDate} endDate={this.state.endDate} numberOfItems={10} />
            </div>
        );
    }
};

export default LaunchDetailsPage;