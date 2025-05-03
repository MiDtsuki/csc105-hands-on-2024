import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.patch("/:id/completion", todoController.updateTodoCompletion);
todoRouter.patch("/:id/title", todoController.updateTodoTitle);
todoRouter.get("/user/:userId", todoController.getUserTodos);

export {todoRouter};