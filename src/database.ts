import mongoose from 'mongoose'
import { isJSDocAugmentsTag } from 'typescript'


export async function startConnection(){

    const db = await mongoose.connect('mongodb://localhost/photo-gallery-db',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection to Database stablished')
}

 