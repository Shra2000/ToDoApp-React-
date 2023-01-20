let List = (props) => {
    return (
        <ul>
        {props.taskwaliarray.map((el) =>{
            return (
            <li>{el} 
                <button onClick= {() => { props.deletetask(el) }} >
                    Delete
                </button>
            </li>
            );
          } )
        }
        </ul>
    );
}
export default List;