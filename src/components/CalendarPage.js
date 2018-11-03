import React, { Component } from 'react';
import Calendar from './Calendar.js';

class CalendarPage extends Component {
    render() {
        return (
            <div className="calendar__wrapper">
                <Calendar />
            </div>
        );
    }
}

export default CalendarPage;