import { Schema, model } from "mongoose";
import { userSchema } from "./User";

export const transactionSchema = new Schema({
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const Transaction = model('Transaction', transactionSchema)
export default Transaction;