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
                disabled={this.props.disabled}
                onClick={()=>{
                console.log("Clicked");
                }}>
                {this.props.title || "button"}</button>
            </div>
        );
    }
}
export default Button;