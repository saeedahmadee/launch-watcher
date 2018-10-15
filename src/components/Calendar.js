import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import API from './APIConfig';
import moment from 'moment';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            birthdays: {}
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
        })
        .catch(error => {
            console.log(error);
        });
    }

    showNextMonth() {
        this.dayPicker.showNextMonth();
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
        })
        .catch(error => {
            console.log(error);
        });
    }

    showPrevMonth() {
        this.dayPicker.showPreviousMonth();
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
            this.renderDay();
        })
        .catch(error => {
            console.log(error);
        });
    }

    renderDay(day) {
        const date = {
            year: day.getFullYear(),
            month: day.getMonth() + 1,
            day: day.getDate()
        };
        const dateStyle = {
          position: 'absolute',
          color: 'lightgray',
          bottom: 0,
          right: 0,
          fontSize: 20,
        };
        const cellStyle = {
          height: 50,
          width: 60,
          position: 'relative',
        };
        return (
          <a href="test">
              <div style={cellStyle}>
              <div style={dateStyle}>{date.day}</div>
                  <div>
                      {this.state.birthdays[date.year + '_' + date.month + '_' + date.day]} 
                  </div>
              </div>
          </a>
        );
      }
    render() {
        return (
            <div>
                <span onClick={this.showPrevMonth}>showPrevMonth></span>
                <span onClick={this.showNextMonth}>showNextMonth></span>
                <DayPicker
                ref={ el => this.dayPicker = el }
                    canChangeMonth={true}
                    className="launches-calendar"
                    renderDay={this.renderDay}
                />
            </div>
            
        );
    }
}

export default Calendar;