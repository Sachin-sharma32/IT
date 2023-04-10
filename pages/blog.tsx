import Blog from '../components/Blog'
import fsPromises from "fs/promises";
import path from "path";
import { useEffect, useState } from "react";
import query from '../queries/getAllPosts';
import { client } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/slices";
import { State } from '../utils/types';

const BlogContainer = ({ posts }) => {
  const dispatch = useDispatch();
  dispatch(setPosts(posts));
  const newPosts = useSelector((state:State) => {
    state.base.posts;
  });
  console.log(newPosts);
  console.log(posts);

  return (
    <div className="cursor-none  w-screen">
      <div className="cursor-none  bg-secondary min-h-[40vh] flex items-end">
        <h1 className="cursor-none  text-5xl text-white mb-10 ml-10 font-satoshi font-extrabold uppercase">
          BLOGS
        </h1>
      </div>
      <div className="cursor-none py-10 grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 justify-items-center px-10 w-full gap-y-6">
        {posts?.map((blog, i) => (
          <Blog blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;

export async function getServerSideProps() {
  const posts = await client.fetch(query);
  console.log(posts);

  return {
    props: { posts },
  };
}
