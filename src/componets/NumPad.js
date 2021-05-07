import React, { Component } from 'react'
import './NumPad.css'
class NumPad extends Component {
    render() {
        return (
            <div className='numpad'>
                {this.props.children}
            </div>
        )
    }
}
export default NumPad