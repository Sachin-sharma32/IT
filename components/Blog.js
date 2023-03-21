import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { imageBuilder, client } from "../sanity";
import moment from "moment";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const Blog = ({ blog }) => {
  console.log(blog);
  const imageProps = useNextSanityImage(client, blog.image);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
      className={`
                    bg-[#f8f8f8] shadow-2xl text-black
             h-[520px]  w-[350px] rounded-2xl overflow-hidden relative mb-4`}
    >
      <div className="cursor-none  overflow-hidden">
        <Image
          {...imageProps}
          width={500}
          height={500}
          className="cursor-none h-[180px] hover:scale-125 transition-all duration-700"
          alt="post"
        />
      </div>
      <article className="cursor-none  p-4">
        <div className="cursor-none flex items-center justify-between text-xs flex-wrap gap-1">
          <p
            className={`text-gray-700
                        `}
          >
            {blog.readTime} minutes
          </p>
        </div>
        <Link href={`/post/${blog._id}`} className="cursor-none ">
          <h5
            className={`text-black
                        mt-4 text-2xl font-bold mb-2`}
          >
            {blog.title}
          </h5>
          <p className="cursor-none  mb-4 text-sm text-gray-500">
            {blog.summery}
          </p>
        </Link>
        <section className="cursor-none flex gap-2 items-start absolute bottom-4">
          <div className="cursor-none flex gap-2">
            <Avatar src={"/bs-1.jpg"} />
            <div>
              <div className="cursor-none flex gap-6 items-center">
                <p
                  className={`
                                            text-black
                                     relative`}
                >
                  {blog.author.name}
                </p>
                <div className="cursor-none  text-gray-500">
                  {moment(blog.publishedAt).format("ll")}
                </div>
              </div>
              <p className="cursor-none  text-xs text-gray-500">
                {blog.author.work}
              </p>
            </div>
          </div>
        </section>
      </article>
    </motion.div>
  );
};

export default Blog;
