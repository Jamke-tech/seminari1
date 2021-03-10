import mongoose from 'mongoose'
import { isJSDocAugmentsTag } from 'typescript'


export async function startConnection(){

    const db = await mongoose.connect('mongodb://127.0.0.1:27017/photo-gallery-db',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection to Database stablished')
}

 