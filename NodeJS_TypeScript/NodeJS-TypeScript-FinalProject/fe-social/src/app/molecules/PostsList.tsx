"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { $api } from "../api/api";

type Post = {
  _id: string;
  user_id: string;
  image_url: string;
  caption: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  __v: number;
};

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = () => {
      $api.get("/post/all").then((res) => setPosts(res.data));
    };
    getPosts();
  }, []);

  return (
    <div className="">
      <ul className="max-w-[848px] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[40px] gap-y-[24px]">
        {posts.length > 0 ? (
          posts.map((item: Post) => (
            <PostItem
              key={item._id}
              img={item.image_url}
              caption={item.caption}
            />
          ))
        ) : (
          <span>No Posts</span>
        )}
      </ul>
    </div>
  );
};

const PostItem = ({ caption, img }: { caption: string; img: string }) => {
  return (
      <li className="bg-white shadow-md overflow-hidden w-[404px] h-[716px]">
        <Image
          src={img}
          alt={caption}
          width={404}
          height={716}
          layout="responsive"
          objectFit="cover"
          className="rounded-[4px]"
        />
        <span className="p-4 text-sm text-gray-700">{caption}</span>
      </li>
  );
};

export default PostsList;