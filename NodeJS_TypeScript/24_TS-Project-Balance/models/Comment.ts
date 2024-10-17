import { Schema, model } from "mongoose";

export const commentSchema = new Schema({
  body: {
    type: String,
    requred: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Comment = model("Comments", commentSchema);
export default Comment;
