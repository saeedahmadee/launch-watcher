import React, { Component } from 'react';
import API from './APIConfig';
import moment from 'moment';
import Countdown from './Countdown.js';
import { Link } from 'react-router-dom'

class LaunchHero extends Component {
    state = {
        launches: [],
        loading: true
    }

    componentDidMount() {
        API.get(`launch/next/2`)
            .then(res => {
                const launches = res.data.launches;
                this.setState(() => ({ launches: launches[0].netstamp > 0 ? [launches[0]] : [launches[1]], loading: false }));
            })
            .catch(error => {
                console.log(error);
                this.setState(() => ({ loading: false }));
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ? <div>loading...</div> : ''
                }
                {
                    this.state.launches.map((launch, index) => (
                        <Link className="hero" to={`/launch/${launch.id}`} key={`launch-${index}`}>
                            <div className="hero__wrapper">
                                <div className="hero__text">
                                    {launch.lsp.name}
                                </div>
                                <div className="hero__text hero__main">
                                    {launch.name}
                                </div>
                                <div className="hero__text">
                                    {launch.location.name}
                                </div>
                            </div>
                            <Countdown date={moment.unix(launch.netstamp).toDate().toISOString()} />
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default LaunchHero;