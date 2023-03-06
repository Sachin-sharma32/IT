import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { imageBuilder } from "../sanity";
import moment from "moment";

const Blog = ({ blog }) => {
    console.log(blog);
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
            <div className=" overflow-hidden">
                <img
                    src={imageBuilder(blog.image)}
                    width="400"
                    className="h-[180px] hover:scale-125 transition-all duration-700"
                    alt="post"
                />
            </div>
            <article className=" p-4">
                <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                    <p
                        className={`text-gray-700
                        `}
                    >
                        {blog.readTime} minutes
                    </p>
                </div>
                <Link href={`/post/${blog._id}`} className=" cursor-pointer">
                    <h5
                        className={`text-black
                        mt-4 text-2xl font-bold mb-2`}
                    >
                        {blog.title}
                    </h5>
                    <p className=" mb-4 text-sm text-gray-500">
                        {blog.summery}
                    </p>
                </Link>
                <section className="flex gap-2 items-start absolute bottom-4">
                    <div className="flex gap-2 cursor-pointer">
                        <Avatar src={"/bs-1.jpg"} />
                        <div>
                            <div className="flex gap-6 items-center">
                                <p
                                    className={`
                                            text-black
                                     relative`}
                                >
                                    {blog.author.name}
                                </p>
                                <div className=" text-gray-500">
                                    {moment(blog.publishedAt).format("ll")}
                                </div>
                            </div>
                            <p className=" text-xs text-gray-500">
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
