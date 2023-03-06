import React, { useEffect, useMemo, useState } from "react";
import Smooth from "../../utils/Smooth";
import { useRouter } from "next/router";
import moment from "moment/moment";
import { client, imageBuilder } from "../../sanity";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "../../components/RichTextComponent";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Post = () => {
    const router = useRouter();
    console.log(router.query);
    const posts = useSelector((state) => state.base.posts);
    console.log(posts);

    const currentPost = posts?.filter((item) => {
        console.log(item._id, router.query.post);
        return item?._id == router.query.post;
    });
    const post = currentPost[0];

    const [effect, setEffect] = useState(null);

    if (post) {
        return (
            <Smooth>
                <div
                    className={`text-black h-[100%] bg-no-repeat bg-fixed bg-center`}
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.9) 90%, rgb(255, 255, 255) 100%),url(${imageBuilder(
                            post.image
                        )})`,
                    }}
                >
                    {post && (
                        <article
                            className={` text-black px-4 md:px-10 py-4 md:py-8 flex flex-col lg:flex-row lg:gap-10`}
                        >
                            <div className=" w-[100%] lg-[70%] pt-10">
                                <h1 className=" mt-2 md:mt-8 text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
                                    {post.title}
                                </h1>
                                <div
                                    className={`text-black mt-4 flex gap-2 text-xs items-center`}
                                >
                                    {post.author?.image ? (
                                        <Avatar
                                            src={imageBuilder(
                                                post.author.image
                                            )}
                                        />
                                    ) : (
                                        <Avatar />
                                    )}
                                    <figcaption>
                                        {post.author.name} on{" "}
                                        {moment(post.publishedAt).format("ll")}
                                    </figcaption>
                                </div>
                                <main
                                    className={`
                                            bg-white text-[#262626]
                                     mt-4 md:mt-10  p-4 sm:p-10 text-xs sm:text-base relative py-4 rounded-2xl shadow-2xl`}
                                    style={{ fontFamily: "Inter" }}
                                >
                                    <PortableText
                                        value={post.content}
                                        components={RichTextComponent()}
                                    />
                                </main>
                            </div>
                        </article>
                    )}
                </div>
            </Smooth>
        );
    } else {
        return <div className="min-h-screen"></div>;
    }
};

export default Post;

// Post.getInitialProps = async (context) => {
//     const { query } = context;
//     const headerPost = await client.fetch(
//         `*[_type == "post" && _id == $id][0]{title, image, summery, tags[]->, summery,_id}`,
//         {
//             id: query.post,
//         }
//     );
//     const tags = headerPost.tags.map((tag) => tag.title);
//     console.log(headerPost);
//     return {
//         title: headerPost.title,
//         image: headerPost?.image?.asset
//             ? imageBuilder(headerPost.image)
//             : "https://cdn.sanity.io/images/k0me7ccv/production/8fa01467c0ac00d838090a47782c009153f72a94-1024x1024.jpg",
//         summery: headerPost.summery[0].children[0].text,
//         keywords: tags.toString(),
//         type: "website",
//         imageAlt: headerPost.title,
//         id: headerPost._id,
//     };
// };
