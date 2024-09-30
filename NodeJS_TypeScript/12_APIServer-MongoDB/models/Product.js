import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: String,
    consumer: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

export const Product = model('Products', schema);