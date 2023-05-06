import React, { Component } from 'react'
import '../styles/styles.css';

class EducationalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            universityName: '',
            degree: '',
            graduationTerm: ''
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
        const { submitted, universityName, degree, graduationTerm } = this.state;
        if(submitted) {
            return (
                <div className="module">
                  <h1>Educational Experience</h1>
                  <p>University Name: {universityName}</p>
                  <p>Degree: {degree}</p>
                  <p>Graduation Term: {graduationTerm}</p>
                  <button onClick={() => this.setState({ submitted: false })}>EDIT</button>
                </div>
            );
        }

        return (
            <div className="module">
                <h1>Educational Experience</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="universityName" placeholder="University Name" onChange={this.handleChange}></input>
                    <input type="text" name="degree" placeholder="Degree" onChange={this.handleChange}></input>
                    <input type="text" name="graduationTerm" placeholder="Graduation Term" onChange={this.handleChange}></input>
                    <div>
                        <button>EDIT</button>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EducationalExperience;