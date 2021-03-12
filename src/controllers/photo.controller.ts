import {Request, Response} from 'express'
import Photo from '../models/Photo'
import path from 'path'
import fs from 'fs-extra'

export function helloWorld( req: Request, res:Response): Response {
    return res.send('Hello World !!!')
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {

    const{ title, description} = req.body;

    const newPhoto ={
        title: title,
        description: description,
        imagePath: req.file.path //guardem el path de la foto

    };

    const photo = new Photo(newPhoto);// creem l'objecte de MongoDB
    
    await photo.save()//guardem la foto amb mongoose

    return res.json({
        message : 'Photo correctly uploaded'
    })
}

export async function getPhotos(req: Request, res:Response): Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
}

export async function getPhoto (req:Request, res:Response): Promise<Response>{
   const photo = await Photo.findById(req.params.id);//busquem una foto per el id del params

   return res.json(photo);

}
export async function deletePhoto(req:Request, res:Response): Promise<Response>{
    const {id} =req.params;
    const photo = await Photo.findByIdAndRemove(id);//borramos la info de la BBDD

    if(photo){
        await fs.unlink(path.resolve(photo.imagePath))//eliminamos la fotografia del servidor
    }

    return res.json({
        message: 'Hemos elimnado de nuestra BBDD la photo',
        photo
    })

}
export async function updatePhoto (req:Request, res:Response) : Promise<Response>{
    const {id} = req.params;
    const{title,description}=req.body; //Aquesta informació ens ve per format JSON
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    },{new:true});
    
    return res.json({
        message: 'Succesfully Updated',
        updatedPhoto
    })

}