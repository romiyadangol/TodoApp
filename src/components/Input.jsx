import React from 'react'
import '../assets/css/components/input.css'

class Input extends React.Component{
    render(){
        return(
            <div>
                <input
                className='input'
                placeholder={this.props.placeholder || "Enter something"}
                name={this.props.name}
                disabled={this.props.disabled}
                // required={this.props.required}
                value={this.props.value}
                onChange={this.props.action}>
                </input>
            </div>
        );
    }
}
export default Input;