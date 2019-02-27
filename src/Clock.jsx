import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        this.getTimeUntil = this.getTimeUntil.bind(this);
        this.leadingZero = this.leadingZero.bind(this);
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadLine);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
    }

    leadingZero(num) {
        return num < 10 ? "0" + num : num;
    }

    getTimeUntil(deadLine) {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }
    render() {
        return (
            <div>
                <div className="timer-days">
                    {this.leadingZero(this.state.days)} days
                </div>
                <div className="timer-hours">
                    {this.leadingZero(this.state.hours)} hours
                </div>
                <div className="timer-minutes">
                    {this.leadingZero(this.state.minutes)} minutes
                </div>
                <div className="timer-seconds">
                    {this.leadingZero(this.state.seconds)} seconds
                </div>
            </div>
        );
    }
}

Clock.propTypes = {
    deadline: PropTypes.string
};
export default Clock;
