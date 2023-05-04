import React, { Component } from 'react'

class EducationalExperience extends Component {

    render() {
        return (
            <div className="module">
                <h1>Educational Experience</h1>
                <form>
                    <input type="text" name="universityName" placeholder="University Name"></input>
                    <input type="text" name="degree" placeholder="Degree"></input>
                    <input type="text" name="graduationTerm" placeholder="Graduation Term"></input>
                </form>
            </div>
        )
    }
}

export default EducationalExperience;