import React, { Component } from 'react';
import API from './APIConfig';

class LaunchDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id ? props.match.params.id : '',
            launches: []
        };
    }

    componentDidMount() {
        API.get(`launch/${this.state.id}`)
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
                        <div key={`item-${index}`}>
                            <div>
                                {launch.name}
                            </div>
                            <div>
                                {launch.location.name}
                            </div>
                            <br />
                            {
                                launch.missions.map((mission, index) => (
                                    <div key={`item-${index}`}>
                                        <div>
                                            {mission.name}
                                        </div>
                                        <div>
                                            {mission.description}
                                        </div>
                                        <br />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default LaunchDetailsPage;