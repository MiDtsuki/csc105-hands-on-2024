import type {Context} from "hono";
import * as userModel from "../models/user.model.ts"

type createUserBody = {
    firstName : string;
    lastName : string;
}

type updateUserBody = {
    firstName : string;
    lastName : string;
}

const createUser = async (c: Context)=>{
    try{
        const body = await c.req.json<createUserBody>();
        if(!body.firstName || !body.lastName)
            return c.json(
        {
            success: false,
            data:null,
            msg: "Missing requied field"
        })
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success:false,
                data: null,
                msg:"user already exist"
            })
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName,
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created user",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUsers();
        return c.json({
            success: true,
            data: users,
            msg: "Retrieved all users"
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
};

const updateUser = async (c: Context) => {
    try {
        const userId = Number(c.req.param('id'));
        if (isNaN(userId)) {
            return c.json({
                success: false,
                data: null,
                msg: "Invalid user ID"
            }, 400);
        }

        const body = await c.req.json<updateUserBody>();
        if (!body.firstName || !body.lastName) {
            return c.json({
                success: false,
                data: null,
                msg: "Missing required fields"
            }, 400);
        }

        const updatedUser = await userModel.updateUser(userId, body.firstName, body.lastName);
        return c.json({
            success: true,
            data: updatedUser,
            msg: "User updated successfully"
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
};

export {createUser, getAllUsers, updateUser};