import { useState } from "react"

const TodoNew = (props) => {
    // console.log("props : ", props)
    const { addNewTodo } = props;
    // addNewTodo('dieu')
    const [valueInput, setValueInput] = useState("default")
    const handleClick = () => {
        // // alert("click me")
        // console.log("input ", valueInput)
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleChange = (name) => {
        setValueInput(name)

    }
    return (
        <div className='todo_new'>
            <input type="text"
                onChange={(event) => { handleChange(event.target.value) }}
                value={valueInput} />
            <button
                onClick={handleClick}>Add</button>
            <div>
                text is : {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;