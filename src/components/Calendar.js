import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import API from './APIConfig';
import Loading from './Loading';
import moment from 'moment';
import { Link } from 'react-router-dom'
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            birthdays: {},
            loading: true
        };

        this.renderDay = this.renderDay.bind(this);
        this.showNextMonth = this.showNextMonth.bind(this);
        this.showPrevMonth = this.showPrevMonth.bind(this);
    }

    componentDidMount() {
        let month = this.dayPicker.state.currentMonth.getMonth()+1;
        let thisMonth = moment((new Date())).format('YYYY-');
        thisMonth = thisMonth + month + "-";
        API.get(`launch/${thisMonth}01/${thisMonth}31`)
            .then(res => {
            const launches = res.data.launches;
            let newState = {};
            for (var i in launches) {
                if (newState[moment(launches[i].isonet).format('YYYY_MM_DD')]) {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')]++;
                } else {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')] = 1;
                }
            }
            this.setState((prevState) => ({ birthdays: {...prevState.birthdays, ...newState} }));
            this.setState(() => ({ loading: false }));
        })
        .catch(error => {
            console.log(error);
            this.setState(() => ({ loading: false }));
        });
    }

    showNextMonth() {
        this.setState(() => ({ loading: true }));
        this.dayPicker.showNextMonth();
        let month = this.dayPicker.state.currentMonth.getMonth()+2;
        month = month < 10 ? '0' + month : month;
        let thisMonth = moment((new Date())).format('YYYY-');
        thisMonth = thisMonth + month + "-";
        API.get(`launch/${thisMonth}01/${thisMonth}31`)
            .then(res => {
            const launches = res.data.launches;
            let newState = {};
            for (var i in launches) {
                if (newState[moment(launches[i].isonet).format('YYYY_MM_DD')]) {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')]++;
                } else {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')] = 1;
                }
            }
            this.setState((prevState) => ({ birthdays: {...prevState.birthdays, ...newState} }));
            this.setState(() => ({ loading: false }));
        })
        .catch(error => {
            console.log(error);
            this.setState(() => ({ loading: false }));
        });
    }

    showPrevMonth() {
        this.setState(() => ({ loading: true }));
        this.dayPicker.showPreviousMonth();
        let month = this.dayPicker.state.currentMonth.getMonth();
        month = month < 10 ? '0' + month : month;
        let thisMonth = moment((new Date())).format('YYYY-');
        thisMonth = thisMonth + month + "-";
        API.get(`launch/${thisMonth}01/${thisMonth}31`)
            .then(res => {
            const launches = res.data.launches;
            let newState = {};
            for (var i in launches) {
                if (newState[moment(launches[i].isonet).format('YYYY_MM_DD')]) {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')]++;
                } else {
                    newState[moment(launches[i].isonet).format('YYYY_MM_DD')] = 1;
                }
            }
            this.setState((prevState) => ({ birthdays: {...prevState.birthdays, ...newState} }));
            this.setState(() => ({ loading: false }));
        })
        .catch(error => {
            console.log(error);
            this.setState(() => ({ loading: false }));
        });
    }

    renderDay(day) {
        const date = {
            year: day.getFullYear(),
            month: day.getMonth() + 1,
            day: day.getDate()
        };
        date.month = date.month < 10 ? '0' + date.month : date.month;
        date.day = date.day < 10 ? '0' + date.day : date.day;
        return (
            <Link to={`/range/${date.year + '-' + date.month + '-' + date.day}/${date.year + '-' + date.month + '-' + date.day}`}>
                <div className="daypicker__cell">
                    <div className={"daypicker__cellday " + (this.state.birthdays[date.year + '_' + date.month + '_' + date.day] ? 'daypicker__indicate' : '')}>
                        {date.day}
                    </div>
                </div>
            </Link>
        );
      }
    render() {
        return (
            <div>
                {
                    this.state.loading ? <Loading /> : ''
                }
                <DayPicker
                    ref={ el => this.dayPicker = el }
                    canChangeMonth={true}
                    className="launches-calendar"
                    renderDay={this.renderDay}
                />
                <div className="calendar__navigation">
                    <button onClick={this.showPrevMonth}>{'<'}</button>
                    <button onClick={this.showNextMonth}>></button>
                </div>
            </div>
            
        );
    }
}

export default Calendar;