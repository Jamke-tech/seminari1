import {Router} from 'express';
import { createPhoto, deletePhoto, getPhoto, getPhotos, helloWorld, updatePhoto } from '../controllers/photo.controller';
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

export default router;