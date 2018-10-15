import React, { Component } from 'react';
import Calendar from './Calendar.js';

class CalendarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: '',
            launches: [],
            loading: true
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Calendar />
            </div>
        );
    }
}

export default CalendarPage;