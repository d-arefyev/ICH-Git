import { Schema, model } from "mongoose";

export const transactionSchema = new Schema({
    type: {
        type: String,
        enum: ['income', 'exprense'],
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
