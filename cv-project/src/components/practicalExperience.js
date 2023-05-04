import React, { Component } from 'react'

class PracticalExperience extends Component {

    render() {
        return (
            <div className="module">
                <h1>Practical Experience</h1>
                <form>
                    <input type="text" name="companyName" placeholder="Company Name"></input>
                    <input type="text" name="positionTitle" placeholder="Position Title"></input>
                    <input type="text" name="city" placeholder="City"></input>
                    <input type="text" name="fromDate" placeholder="From"></input>
                    <input type="text" name="toDate" placeholder="To"></input>
                </form>
            </div>
        )
    }
}

export default PracticalExperience;