import React, { Component } from 'react'
import '../styles/styles.css';

class PracticalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            companyName: '',
            positionTitle: '',
            city: '',
            from: '',
            to: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({submitted: true});
    }

    handleChange = (event) => {
        const {name, value}= event.target
        this.setState({[name]: value});
    }

    render() {
        const { submitted, companyName, positionTitle, city, from, to } = this.state;
        if(submitted) {
            return (
                <div className="module">
                  <h1>Practical Experience</h1>
                  <p>Company Name: {companyName}</p>
                  <p>Position Title: {positionTitle}</p>
                  <p>City: {city}</p>
                  <p>From: {from}</p>
                  <p>To: {to}</p>
                  <button onClick={() => this.setState({ submitted: false })}>EDIT</button>
                </div>
            );
        }

        return (
            <div className="module">
                <h1>Practical Experience</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="companyName" placeholder="Company Name" onChange={this.handleChange}></input>
                    <input type="text" name="positionTitle" placeholder="Position Title" onChange={this.handleChange}></input>
                    <input type="text" name="city" placeholder="City" onChange={this.handleChange}></input>
                    <input type="text" name="fromDate" placeholder="From" onChange={this.handleChange}></input>
                    <input type="text" name="toDate" placeholder="To" onChange={this.handleChange}></input>
                    <div>
                        <button>EDIT</button>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PracticalExperience;