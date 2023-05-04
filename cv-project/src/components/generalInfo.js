import React, { Component } from 'react'

class generalInfo extends Component {

    render() {
        return (
            <div className="generalInfo">
                <h1>General Information</h1>
                <form>
                    <input type="text" name="firstName" placeholder="First Name"></input>
                    <input type="text" name="lastName" placeholder="Last Name"></input>
                    <input type="text" name="email" placeholder="Email"></input>
                    <input type="text" name="phoneNumber" placeholder="Phone Number"></input>
                    <input type="text" name="description" placeholder="Description"></input>
                </form>
            </div>
        )
    }
}

export default generalInfo;