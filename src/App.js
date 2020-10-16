import React,{Component} from 'react';
import './App.css';
import Todoitem from './components/Todoitem'
import tick from './img/tick.svg';
class App extends Component{
  constructor(){
    super();
    this.state={
      newItem:'',
      todoItems:[
      {title: "Mua bim bim" ,isComplete:true},
      {title: "Di choi",isComplete:true},
      {title: "Shopping"}
   ]
  };
  this.onKeyUp=this.onKeyUp.bind(this);
  this.onChange=this.onChange.bind(this);
  }
  onItemClicked(item){
    return (event)=>{
      const isComplete=item.isComplete;
      const {todoItems}=this.state
      const index=todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete:!isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
      
    }
  }
  onKeyUp(event){
    
    if(event.keyCode === 13){   
      let text=event.target.value;
      if(!text ){
        return;
      }
      text=text.trim();
      if(!text){ return;}
  
      this.setState({
        newItem:'',
        todoItems:[
          {title:text,isComplete:false},
          ...this.state.todoItems 
        ]
      })
    }
    
 
  }
  onChange(event){
    this.setState({
      newItem:event.target.value
    })
  }
  render(){
    const { todoItems,newItem }=this.state;
    if(todoItems.length){
    return(
      <div className="App">
        <div className="Header">
            <img src={tick} width={32}  />
            <input 
              type="text" 
              placeholder="Add a new item" 
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}/>
        </div>
      {
        todoItems.length && todoItems.map((item,index)=><Todoitem 
        key={index} 
        item={item} 
        onClick={this.onItemClicked(item)} />)
      }
        {/* <Todoitem title="Mua bim bim" />
        <Todoitem title="Di choi" />
        <Todoitem title="Shopping" /> */}
        
    </div>
    );
  }else{
    return (
       <div className="App">
        NoThing.here
    </div>
    )
  }
  }
}


export default App;
