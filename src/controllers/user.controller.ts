import {Request, Response} from 'express'
import User from '../models/User'


export async function createUser (req: Request, res: Response): Promise<Response> {

    const{ username, password} = req.body;

    const newUser ={
        username: username,
        password: password
    };

    const user= new User (newUser);// creem l'objecte de MongoDB
    await user.save()//guardem la foto amb mongoose

    return res.json({
        message : 'User correctly uploaded'
    })
}