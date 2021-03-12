import {Schema,model,Document} from 'mongoose';

const schema = new Schema({
    username: String,
    password: String
    
});

interface IUser extends Document {
    username: string;
    password: string
    
}

export default model<IUser>('User',schema);