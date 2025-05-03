import type {Context} from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title:string;
    userId:number;
}

type updateTodoCompletionBody = {
    complete: boolean;
}

type updateTodoTitleBody = {
    title: string;
}

const createTodo = async (c:Context)=>{
    try{
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId) {
            return c.json(
                {
                    success:false,
                    data:null,
                    msg:"Missing required fields",
                },400
            )
        }
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success:true,
            data:newTodo,
            msg:"Created new todo"
        })
    }
    catch(e){
        return c.json(
            {
                success:false,
                data:null,
                msg:`${e}`
            },500
        )
    }
}

const updateTodoCompletion = async (c: Context) => {
    try {
        const todoId = Number(c.req.param('id'));
        if (isNaN(todoId)) {
            return c.json({
                success: false,
                data: null,
                msg: "Invalid todo ID"
            }, 400);
        }

        const body = await c.req.json<updateTodoCompletionBody>();
        if (body.complete === undefined) {
            return c.json({
                success: false,
                data: null,
                msg: "Missing complete status"
            }, 400);
        }

        const updatedTodo = await todoModel.updateTodoCompletion(todoId, body.complete);
        return c.json({
            success: true,
            data: updatedTodo,
            msg: "Todo completion status updated"
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`
            },
            500
        );
    }
}

const updateTodoTitle = async (c: Context) => {
    try {
        const todoId = Number(c.req.param('id'));
        if (isNaN(todoId)) {
            return c.json({
                success: false,
                data: null,
                msg: "Invalid todo ID"
            }, 400);
        }

        const body = await c.req.json<updateTodoTitleBody>();
        if (!body.title) {
            return c.json({
                success: false,
                data: null,
                msg: "Missing title"
            }, 400);
        }

        const updatedTodo = await todoModel.updateTodoTitle(todoId, body.title);
        return c.json({
            success: true,
            data: updatedTodo,
            msg: "Todo title updated"
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`
            },
            500
        );
    }
}

const getUserTodos = async (c: Context) => {
    try {
        const userId = Number(c.req.param('userId'));
        if (isNaN(userId)) {
            return c.json({
                success: false,
                data: null,
                msg: "Invalid user ID"
            }, 400);
        }

        const todos = await todoModel.getUserTodos(userId);
        return c.json({
            success: true,
            data: todos,
            msg: "Retrieved user todos"
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`
            },
            500
        );
    }
}

export {createTodo, updateTodoCompletion, updateTodoTitle, getUserTodos};