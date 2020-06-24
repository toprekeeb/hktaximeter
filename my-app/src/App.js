import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';

class App extends React.Component {
    // an input box for inputting hourly rate
    // button to submit
    // on submit, save input value as state
    // <p> to show the total money made
    // total = total + hourly_rate/60/60 * interval
    // update the ticker every 'interval'

    constructor(props) {
        super(props);
        this.state = {
            hourly_rate: 0,
            input: 0,
            total: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            hourly_rate: this.state.input
        });
    }

    tick() {
        let total = this.state.total + ((this.state.hourly_rate / 3600) * 5)
        this.setState({
            total: total
        });
    }

    render()  {
      return (
          <div>
            <h1>{this.state.total}</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formHourlyRate">
                    <Form.Control
                        value={this.state.input}
                        onChange={this.handleChange}
                        type="number"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </div>
      );
    }
}

export default App;
