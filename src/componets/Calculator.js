import React, { Component } from 'react'
import Button from './Button'
import NumPad from './NumPad'
import InputDisplay from './InputDisplay'
import OutputDisplay from './OutputDisplay'
import './calculator.css'

class calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             question:'',
             answer:''
        }
    }
    calculate = () => {
        try {
            const result = eval(this.state.question);
            this.setState({answer: result});
        } catch (e) {
            console.log(e);
            this.setState({answer: 'error'})
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        /*if ((value !== "equal") &&  (value !== "clear")) {
            this.setState({
                ...this.state,
                question: this.state.question + value
            })
        }*/
        switch(value) {
            case 'clear':
                this.setState({ question: '', answer: ''});
                break;
            case 'equal': 
                this.calculate();
                break;
            default:
                this.setState({ question: this.state.question + value});
        }
    }
    render() {
        return (
            <div>
                <div className='calculatorBox'>
                <div id='title' className='textCenter'>
                    <h5><b>ELECTRONIC CALCULATOR</b></h5>
                </div>
                <div className='calculatorDisplay'>
                <InputDisplay question={this.state.question}/>
                <OutputDisplay answer={this.state.answer}/> 
                </div>
                <NumPad>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />

                    <Button onClick={this.handleClick} label="&divide;" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />

                    <Button onClick={this.handleClick} label="x" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="" value="null" />

                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                </NumPad>
            </div>
            <footer>Designed and Coded By <span id="name">Amit Kumar Rout</span></footer>
            </div>
        )
    }
}
export default calculator;