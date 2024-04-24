import React from 'react'
import Header from './components/Header';
import Input from './components/Input'; 
import './assets/css/index.css';
import Button from './components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component{
  notify = () => toast.success(" New Task Added!!");
  render(){
    return(
      <div className='main-container'>
        <Header title="Todo-App"/>
        <section className='form-wrapper'>
        <Input name="todo"/>
        <Button name="Add-btn" title="Add" />
        </section>
        <button onClick={this.notify}>Notify!</button>
        <ToastContainer 
        theme="light"
        // transition="slide"
        />
      </div>
    );
  }
}
export default App;