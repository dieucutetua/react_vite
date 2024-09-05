const TodoData = (props) => {
    const { todoList, deleteTodo } = props;
    // console.log("check: ", todoList)
    const handleClick = (id) => {
        // alert(id)
        deleteTodo(id)
    }
    return (
        <div className='todo_data'>
            {todoList.map((item, index) => {
                return (<div className="todo_item" key={item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleClick(item.id)}
                    >Delete</button></div>)
            })}
        </div>
    )
}
export default TodoData;