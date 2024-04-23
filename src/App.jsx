import React from 'react'
import Header from './components/Header';
import Input from './components/Input'; 
import './assets/css/index.css';


class App extends React.Component{
  render(){
    return(
      <div className='main-container'>
        <Header title="Todo-App"/>
        <Input name="todo"/>
        {/* <Input  required={true} placeholder={"Enter your Email"} name="email"/> */}
  
      </div>
    );
  }
}
export default App;