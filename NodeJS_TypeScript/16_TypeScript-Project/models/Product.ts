import { Schema, model, Document } from 'mongoose';

// Интерфейс для типизации продукта
interface IProduct extends Document {
    name: string;
    quantity: number;
    price: number;
    createdAt: Date;
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;




// import { Schema, model } from "mongoose";

// const productSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     quantity: {
//         type: Number,
//         required: true,
//         default: 1
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// })

// const Product = model('Product', productSchema);

// export default Product;