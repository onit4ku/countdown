import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadLine: "July 31, 2019",
            newDeadLine: ""
        };
    }

    changeDeadLine() {
        this.setState({ deadLine: this.state.newDeadLine });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    Countdown to {this.state.deadLine}
                </div>

                <Clock deadLine={this.state.deadLine} />
                <br />
                <div>
                    <input
                        type="date"
                        placeholder="new date"
                        onChange={event =>
                            this.setState({ newDeadLine: event.target.value })
                        }
                    />
                    <Button onClick={() => this.changeDeadLine()}>
                        Submit
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
