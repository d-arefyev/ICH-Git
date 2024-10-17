import { Schema, model } from "mongoose";
import { transactionSchema } from "./Transaction";

export const userSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    initalBalance: {
        type: Number,
        required: true,
        default: 0
    },
    currentBalance: {
        type: Number,
        required: true,
        default: 0
    },
    transactions: [transactionSchema],
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const User = model('User', userSchema);
export default User;
