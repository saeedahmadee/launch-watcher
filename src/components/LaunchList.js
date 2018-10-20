import React, { Component } from 'react';
import moment from 'moment';
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
            <div className="list">
                {
                    this.state.loading ? <div>loading...</div> : ''
                }
                {
                    this.state.launches.map((launch, index) => (
                        <Link className="list__link" to={`/launch/${launch.id}`} key={`item-${index}`}>
                            <div className="list__date">
                                <span className="day">{moment(launch.isonet).format('DD').slice(0, 3)}</span>
                                <span className="month">{moment(launch.isonet).format('MMMM').slice(0, 3)}</span>
                            </div>
                            <div className="list__detail">
                                <div className="list__name">
                                    {launch.name}
                                </div>
                                <div className="list__location">
                                    {launch.location.name}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}

export default LaunchList;