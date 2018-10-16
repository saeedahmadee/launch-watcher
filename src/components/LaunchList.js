import React, { Component } from 'react';
import API from './APIConfig';
import { Link } from 'react-router-dom'

class LaunchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: props.numberOfItems ? props.numberOfItems : 1,
            listType: props.listType ? props.listType : 'nextList',
            startDate: props.startDate ? props.startDate : '',
            endDate: props.endDate ? props.endDate : '',
            launches: [],
            loading: true
        };
    }

    componentDidMount() {
        if (this.state.listType === 'nextList') {
            API.get(`launch/next/${this.state.numberOfItems}`)
                .then(res => {
                    const launches = res.data.launches;
                    this.setState(() => ({ launches: launches, loading: false }));
                })
                .catch(error => {
                    console.log(error);
                    this.setState(() => ({ loading: false }));
                })
        } else if (this.state.listType === 'dateRange') {
            API.get(`launch/${this.state.startDate}/${this.state.endDate}`)
                .then(res => {
                    const launches = res.data.launches;
                    this.setState(() => ({ launches: launches, loading: false }));
                })
                .catch(error => {
                    console.log(error);
                    this.setState(() => ({ loading: false }));
                })
        }
        
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ? <div>loading...</div> : ''
                }
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