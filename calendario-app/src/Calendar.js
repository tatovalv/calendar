import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class CalendarComponent extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <h1>Calendario</h1>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarComponent;