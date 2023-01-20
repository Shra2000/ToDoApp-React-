import React from "react" ;
import List from "./List";
import Input from "./Input";
import "./App.css";

class App extends React.Component{
  

  state = { 
    tasks: [ ],
    currInput : " ",
  };

  handleCurrentInput = (value) => {
    return(
      this.setState({currInput: value})

    );
  }
  handleTask = () => {
    
      this.setState({
        tasks: [...this.state.tasks,this.state.currInput],
        currInput : " ",
      });
     
  };

  deletetask = (singletask) => {
    let currstate = this.state.tasks;
              let filteredArr = currstate.filter((Ele) => {
                return Ele != singletask; 
              });
    this.setState({ tasks :filteredArr })
  }

  render = () => {    
    return(
      <div>
      <Input handleCurrentInput = {this.handleCurrentInput} 
              handleTask = {this.handleTask}
              currInput = {this.state.currInput} 
              />
        <List taskwaliarray = {this.state.tasks }
              deletetask = {this.deletetask} 
              />
        </div>
    
    );
    
  };
  
}
export default App;
