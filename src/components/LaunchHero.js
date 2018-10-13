import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class LaunchHero extends Component {
    state = {
        launches: [],
        test: '10'
    }

    componentDidMount() {
        axios.get(`https://launchlibrary.net/1.4/launch/next/1`)
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
                {
                    this.state.launches.map((launch, index) => (
                        <div>
                            <div>
                                {launch.name}
                            </div>
                            <div>
                                {launch.location.name}
                            </div>
                            <div>
                                {moment.unix(launch.netstamp).format("MM/DD/YYYY")}
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default LaunchHero;