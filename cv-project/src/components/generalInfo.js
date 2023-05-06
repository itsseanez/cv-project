import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            description: ''
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
        const { submitted, firstName, lastName, email, phoneNumber, description } = this.state;
        if(submitted) {
            return (
                <div className="module">
                  <h1>General Information</h1>
                  <p>Name: {firstName} {lastName}</p>
                  <p>Email: {email}</p>
                  <p>Phone Number: {phoneNumber}</p>
                  <p>Description: {description}</p>
                  <button onClick={() => this.setState({ submitted: false })}>EDIT</button>
                </div>
            );
        }

        return (
            <div className="module">
                <h1>General Information</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}></input>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}></input>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange}></input>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={this.handleChange}></input>
                    <input type="text" name="description" placeholder="Description" onChange={this.handleChange}></input>
                    <div>
                        <button>EDIT</button>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;