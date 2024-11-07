"use client";

import Image from "next/image";
import PostsList from "../molecules/PostsList";

export const HomePage = () => {
  return (
    <div className="max-w-[848px] ml-[324px] mt-[60px] mb-[70px]">
      <PostsList />

      {/* Check icon" */}
      <div className="flex flex-col justify-center items-center mt-[40px]">
        <Image
          src="/post-check.png"
          alt="Check updates"
          width={82}
          height={82}
          className="flex justify-center items-center"
          priority
        />
        <span className="mt-[10px]">You've seen all the updates</span>
        <span className="text-[12px] text-color-dark-gray">
          You have viewed all new publications
        </span>
      </div>
    </div>
  );
};

export default HomePage;
