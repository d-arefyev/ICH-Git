/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { $api } from "../api";
import styles from "./Posts.module.css";

interface Post {
  _id: string;
  userId: string;
  title: string;
  body: string;
  imageUrl?: string;
  likes?: string[];
  tags?: string[];
  comments?: Comment[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface Comment {
  userId: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
}
// TO-DO Component Posts & Post

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    $api.get(`/posts`).then((res) => setPosts(res.data));
  }, []);

  const handleSubmitNewPost = (e: any) => {
    e.preventDefault();
    $api.post("/posts", {
      ...newPost,
      userId: sessionStorage.getItem("user"),
    });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmitNewPost}>
        <label>Title</label>
        <input
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          type="text"
          placeholder="Enter title"
        />
        <label>Comment body</label>
        <textarea
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          rows={20}
          placeholder="Enter comment body"
        ></textarea>
        <div>
          <button className={styles.secondary} type="reset">
            Reset
          </button>
          <button className={styles.primary} type="submit">
            Create
          </button>
        </div>
      </form>
      <h4>All Posts</h4>
      <ul>
        {posts.map((item: Post) => (
          <PostItem
            _id={item._id}
            userId={item.userId}
            title={item.title}
            body={item.body}
            likes={item.likes}
          />
        ))}
      </ul>
    </div>
  );
};

const PostItem = ({ _id, userId, title, body, likes }: Post) => {
  const handleDeletePost = () => {
    $api.delete("/posts", {
      data: { postId: _id },
    });
  };
  return (
    <li className={styles.item}>
      <h4>{title}</h4>
      <p>{body}</p>
      <div>
        <div>
          <button>Like</button>
          <span>{likes?.length}</span>
        </div>
        <div>
          <button>Dislike</button>
          <span>{likes?.length}</span>
        </div>
      </div>
      <hr />
      <button onClick={handleDeletePost} className={styles.delete}>
        X
      </button>
    </li>
  );
};

export default PostsList;
