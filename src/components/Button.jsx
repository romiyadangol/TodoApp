import React from 'react'
import '../assets/css/components/button.css'

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button className='btn' 
                name={this.props.name} 
                type={this.props.type || "submit"}
                disabled={this.props.disabled}
                onClick={this.props.click}>
                {this.props.label}</button>
            </div>
        );
    }
}
export default Button;