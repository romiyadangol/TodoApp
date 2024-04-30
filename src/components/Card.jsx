import React from 'react'
import '../assets/css/components/card.css'
import Button from './Button';

class Card extends React.Component{
    constructor(props){
        super(props);
 
    }

    render(){
        return(
            <div className='card'>
                <input type="checkbox"
                onChange={this.props.toggleCheckbox}/>
                <span className={this.props.className}>{this.props.title}</span>
                {/* <p>{this.props.description}</p> */}
                <Button label="Edit"/>
                <Button  label="Delete" click={this.props.delclick}/>
            </div>
        );
    }
}
export default Card;