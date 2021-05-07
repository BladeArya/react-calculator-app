import React, { Component } from 'react'
import './OutputDisplay.css'
class OutputDisplay extends Component {
    render() {
        return (
            <div className='outputdisplay'>
                {this.props.answer}
            </div>
        )
    }
}
export default OutputDisplay