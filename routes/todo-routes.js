import express, { Router } from "express";
import { addTodo, deleteTodo, getAllCompletedTodos, getAllTodos, updateTodo } from "../controllers/todo-controllers.js";

const routes = Router();

routes.post("/todos", addTodo);
routes.get("/todos", getAllTodos);
routes.get("/todos/completed", getAllCompletedTodos);
routes.put("/todos/:id", updateTodo);
routes.delete("/todos/:id", deleteTodo);

export default routes;
