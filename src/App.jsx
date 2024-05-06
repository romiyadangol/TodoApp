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
      list: [
        {name: 'Task 1', isComplete: false},
        {name: 'Task 2', isComplete: false},
        {name: 'Task 3', isComplete: false},
        {name: 'Task 4', isComplete: false},
        {name: 'Task 5', isComplete: false},
      ],
    }
}
toggleCheckbox = (index) => {
  // const unmodifiedValue = this.state.list[index];
  const unmodifiedValue = this.state.list.find((_,idx) => index === idx);
  console.log("Unmodified", unmodifiedValue);
  const modifiedValue = {
    name: unmodifiedValue.name,
    isComplete : !unmodifiedValue.isComplete,
  };
  console.log("modified", modifiedValue);
  const updateList = [...this.state.list.slice(0,index),modifiedValue,...this.state.list.slice(index + 1),
  ];
  this.setState({
    list : updateList,
  });
}

action = (e) =>{
  this.setState({
    input : e.target.value,
  });

}
//add button click
click = () =>{
  this.newItem = {
      name : this.state.input,
      isComplete: false,
  }
  this.setState({
      list : [...this.state.list,this.newItem],
      input:'',
  })
}
//edit button click
handleEdit = (index) => {
    this.setState({
        list : this.state.list.map((element,idx) => {
            if(index === idx){
                element.name = prompt('Enter new task',element.name);
            }
            return element;
        })
    });
}


//delete button click
delclick = (index) =>{
  console.log('delete clicked');
  this.setState({
    
    list : this.state.list.filter((_,idx) => {
      return idx !== index;
    }),

    });
    console.log(this.state.list);
    this.notify1();
  };

// isSlice =()=>{
//   const a = [1,2,3,4,5];
//   console.log(a.slice(0,2));
//   const b = [1,2,3,4,5];
//   console.log(b.slice(3));
//   const modified = [...a.slice(0,2),7,...b.slice(3)];
//   console.log(modified);
// }
  notify = () => toast.success(this.state.input + ' added successfully');
  notify1 = () => toast.warning(this.state.input + ' deleted successfully');
  render(){
    return(
      console.log(this.state.list),
      // this.isSlice(),
      <div className='main-container'>
        <Header title="Todo-App"/>
        <section className='form-wrapper'>
        <Input name="todo"  placeholder="Enter your task" action={this.action} value={this.state.input}
        />
        <Button name="Add-btn" label="Add"
        click={this.click}
        />
        </section>
    

        <section>  
        {this.state.list.map((element,index)=>{
          return <Card 
          title={element.name}
          key={index} 
          className={element.isComplete ? 'strike' : ""}
          toggleCheckbox = {() => {
            this.toggleCheckbox(index);
          }}
          handleEdit={()=>{this.handleEdit(index)}}
          delclick={() => {this.delclick(index)}}/>
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