import React, { Component } from 'react';
import API from './APIConfig';
import { Link } from 'react-router-dom'

class LaunchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: props.numberOfItems ? props.numberOfItems : 1,
            launches: []
        };
    }

    componentDidMount() {
        API.get(`launch/next/${this.state.numberOfItems}`)
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
                        <Link to={`/launch/${launch.id}`} key={`item-${index}`}>
                            <div>
                                <div>
                                    {launch.name}
                                </div>
                                <div>
                                    {launch.location.name}
                                </div>
                                <br />
                            </div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default LaunchList;