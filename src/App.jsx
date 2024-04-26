import React from 'react'
import Header from './components/Header';
import Input from './components/Input'; 
import './assets/css/index.css';
import Button from './components/Button';
import Card from './components/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input : '',
      list: [],

    }
}
  notify = () => toast.success(this.state.input + ' added successfully');
  notify1 = () => toast.warning(this.state.input + ' deleted successfully');
  render(){
    return(
      <div className='main-container'>
        <Header title="Todo-App"/>
        <section className='form-wrapper'>
        <Input name="todo"  placeholder="Enter your task" action={(e)=>{
              this.setState({
                input : e.target.value,
                // newinput:'',
              })
              console.log(this.state.input);
            }}
        />
        <Button name="Add-btn" label="Add"
        click={()=>{
          this.setState({
            list : [...this.state.list,this.state.input],//spread operator
            input : '',
          });
          this.notify();
        }}
        />
        </section>
    

        <section>  
        {this.state.list.map((element,index)=>{
          return <Card 
          key={index} 
          list = {element}
          delclick={()=>{
            this.setState({
              list:[...this.state.list.filter((element,i)=> i!== index)],
            });
            this.notify1();
          }}/>
          
        })}
     
        </section>

        {/* <button onClick={this.notify}>Notify!</button> */}
        <ToastContainer 
        theme="light"
        newestOnTop
        position='bottom-right'
        // pauseOnHover
        // transition= "Bounce"
        />
      </div>
    );
  }
}
export default App;