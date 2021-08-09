import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./editTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function

    async function deleteTodo(id) {
        try {            
            const res = await fetch("http://localhost:5000/todos/${id}", {
                method: "DELETE"
            });

            setTodos(todos.filter(
                todo => todo.todo_id !== id));

            //console.log(res);
        } catch (err) {
            console.error(err.message);
        }
    }

    async function getTodos() {
        const res = await fetch("http://localhost:5000/todos");

        const todoArray = await res.json();

        //console.log(todoArray);

        setTodos(todoArray);
    }

    useEffect(() => {
        getTodos();
    }, []);

    //console.log(todos);

    return(
        <Fragment>
        <h1>List Todos</h1>
        <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}

    {
        todos.map(todo => {
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo /></td>
                <td>
                <button className="btn
                btn-danger" onClick={() =>
                deleteTodo(todo.todo_id)} >Delete</button>
                </td>
            </tr>
        })
    }    
    
  </tbody>
</table>
        </Fragment>
        
    )
};

export default ListTodo;