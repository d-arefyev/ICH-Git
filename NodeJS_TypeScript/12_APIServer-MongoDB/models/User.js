import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }]
});

export const User = model('User', schema);
