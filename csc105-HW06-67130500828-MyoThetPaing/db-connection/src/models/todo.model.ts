import {db} from "../index.ts"

const createTodo = async(title:string, userId:number)=>{
    const todo = await db.todo.create({
        data:{
            title:title,
            userId:userId,
        }
    })
    return todo;
}

const updateTodoCompletion = async(id: number, complete: boolean) => {
    const updatedTodo = await db.todo.update({
        where: {
            id: id
        },
        data: {
            complete: complete
        }
    });
    return updatedTodo;
}

const updateTodoTitle = async(id: number, title: string) => {
    const updatedTodo = await db.todo.update({
        where: {
            id: id
        },
        data: {
            title: title
        }
    });
    return updatedTodo;
}

const getUserTodos = async(userId: number) => {
    const todos = await db.todo.findMany({
        where: {
            userId: userId
        }
    });
    return todos;
}

export {createTodo, updateTodoCompletion, updateTodoTitle, getUserTodos};