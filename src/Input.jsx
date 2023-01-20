let Input = (props) => {
  return(
    <div>
       <input 
       className= "input-box"
      type="text" 
      onChange={(e) => {
        props.handleCurrentInput(e.currentTarget.value)
        
      }}

      onKeyDown={(e) => {
        if(e.key == "Enter") {
          props.handleTask();
        }
      }}
      value={props.currInput}
      />

    </div>
     

  );
}
export default Input;


