const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // allows us to access the req.body

//ROUTES//

//get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo")

            res.json(allTodos.rows);
        } catch (err) {
            console.error(err.message);
        }
});

//get a todo

app.get("/todos/id", async (req, res) => {
    try{
        const { id } = req.body;
        const getTodo = await pool.query(
            "Select * FROM todo WHERE todo_id = $1", (id)
        );

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a todo

app.post("/todos", (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES ($1) RETURNING *",
        [description]
        );

        res.json(newTodo);
    } catch(err) {
        console.error(err.message);
    }
});

//update a todo

//delete a todo


app.listen(5000, () => {
    console.log("Server is starting on port 5000");
});