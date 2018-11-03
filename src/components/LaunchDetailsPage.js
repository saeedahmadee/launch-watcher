import React, { Component } from 'react';
import API from './APIConfig';
import moment from 'moment';
import Loading from './Loading';

class LaunchDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id ? props.match.params.id : '',
            launches: [],
            loading: true
        };
    }

    componentDidMount() {
        API.get(`launch/${this.state.id}`)
            .then(res => {
                const launches = res.data.launches;
                this.setState(() => ({ launches: launches, loading: false }));
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
                    this.state.loading ? <Loading /> : ''
                }
                {
                    this.state.launches.map((launch, index) => (
                        <div className="details" key={`item-${index}`}>
                            <div className="details__image">
                                <img alt={launch.name} src={launch.rocket.imageURL} />
                            </div>
                            <div className="hero">
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
                                    <div className="hero__text">
                                        {!launch.tbddate && moment(launch.isonet).format('dddd, MMMM D YYYY')}
                                        {!launch.tbdtime && moment(launch.isonet).format(', hh:mm A')}
                                    </div>
                                </div>
                            </div>
                            {
                                launch.missions.map((mission, index) => (
                                    <div className="details__description" key={`item-${index}`}>
                                        <div>
                                            {mission.description}
                                        </div>
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