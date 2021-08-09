import React, { Fragment, useState} from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try{

        } catch(err){
            console.error(err.message);
        }
    };

    return (
    <Fragment>
        <h1 className="text-center">Input Todo</h1>
        <form className="d-flex" onSubmit={onSubmitForm}> 
            <input 
            type="text" 
            placeholder="add todo"
            className="form-control" 
            value = {description}
            onChange={e => setDescription(e.target.value)}/>
            <button className="btn 
            btn-success">Add</button>
        </form>
    </Fragment>
    )};

export default InputTodo;