import {Router} from 'express';
import { createPhoto, deletePhoto, getPhoto, getPhotos, helloWorld, updatePhoto } from '../controllers/photo.controller';
import {createUser} from '../controllers/user.controller'


import multer from '../libs/multer'

const router = Router();
    
router.route('/')
    .get(helloWorld)// la part lògica esta en un altre document en el controlador de cada cosa

router.route('/photos')//Amb el mateix / podem crear amb el CRUD diferents accions
    .post(multer.single('image'),createPhoto)//especifiquem que accepta una imatge
    .get(getPhotos)// la part lògica esta en un altre document en el controlador de cada cosa

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

router.route('/users')
    .post(createUser)
    //Crear el usercontroller
    //Crear el model User
    //Crear les rutes 
    // Us INSOMNIA
    

export default router;