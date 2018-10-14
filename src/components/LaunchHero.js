import React, { Component } from 'react';
import API from './APIConfig';
import moment from 'moment';
import Countdown from './Countdown.js';
import { Link } from 'react-router-dom'

class LaunchHero extends Component {
    state = {
        launches: []
    }

    componentDidMount() {
        API.get(`launch/next/1`)
            .then(res => {
                const launches = res.data.launches;
                this.setState(() => ({ launches }));
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.loading}
                {
                    this.state.launches.map((launch, index) => (
                        <Link to={`/launch/${launch.id}`} key={`launch-${index}`}>
                            <div>
                                <div>
                                    {launch.name}
                                </div>
                                <div>
                                    {launch.location.name}
                                </div>
                                <br />
                                <div>
                                    <Countdown date={moment.unix(launch.netstamp).toDate().toISOString()} />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default LaunchHero;