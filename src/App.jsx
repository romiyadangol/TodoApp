import React from 'react'
import Header from './components/Header';
import Input from './components/Input'; 
import './assets/css/index.css';
import Button from './components/Button';


class App extends React.Component{
  render(){
    return(
      <div className='main-container'>
        <Header title="Todo-App"/>
        <Input name="todo"/>
        {/* <Input  required={true} placeholder={"Enter your Email"} name="email"/> */}
        <Button name="Add-btn" title="Add" disabled={true}/>
      </div>
    );
  }
}
export default App;