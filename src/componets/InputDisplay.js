import React, { Component } from 'react'
import './InputDisplay.css'
class InputDisplay extends Component {
    render() {
        return (
            <div className='inputdisplay'>
                {this.props.question}
            </div>
        )
    }
}
export default InputDisplay;