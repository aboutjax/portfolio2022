import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorkWrapper from "../../components/workWrapper";
import Button from "../../components/button";
import PostBody from "../../components/post-body";
import Gallery, {
  ImageWithCaption,
  GalleryComposable,
} from "../../components/gallery";

const components = { Button, Gallery, ImageWithCaption, GalleryComposable };

export default function Post({ frontMatter, mdxSource }) {
  let creditsList = frontMatter.credits?.map((item, index) => (
    <li className="text-sm mb-1" key={index}>
      {item}
    </li>
  ));

  return (
    <WorkWrapper>
      <header className="py-[12vh] border-b-default-contrastSecondary/30 border-b p-5 md:px-12">
        <p className="text-sm md:text-base text-default-contrastSecondary">
          {frontMatter.jobTitle && `${frontMatter.jobTitle}, `}
          {frontMatter.projectYear}
        </p>
        <h1 className="leading-heading mb-1 text-xl md:text-2xl font-xl tracking-tight">
          {frontMatter.title}
        </h1>
        <p className="text-default-contrastPrimary text-base md:text-lg max-w-2xl">
          {frontMatter.excerpt}
        </p>
      </header>
      <div className="p-5 md:p-12">
        <PostBody mdxSource={mdxSource} components={components} />
        {frontMatter.credits && (
          <>
            <hr className="border-default-contrastSecondary/30" />
            <h1 className="mt-5 mb-2 text-default-contrastSecondary text-xs uppercase">
              Credits
            </h1>
            <ul>{creditsList}</ul>
          </>
        )}
      </div>
    </WorkWrapper>
  );

  // return (
  //   <WorkWrapper>
  // <header className="py-[12vh] border-b-default-contrastSecondary/30 border-b p-5 md:px-8">
  //   <p className="text-sm md:text-base text-default-contrastSecondary">
  //     {post.jobTitle && `${post.jobTitle}, `}
  //     {post.projectYear}
  //   </p>
  //   <h1 className="leading-heading mb-1 text-xl md:text-2xl font-xl tracking-tight">
  //     {post.title}
  //   </h1>
  //   <p className="text-default-contrastPrimary text-base md:text-lg max-w-2xl">
  //     {post.excerpt}
  //   </p>
  // </header>
  // <div className="p-5 md:px-8">
  //   <PostBody content={post.content} />

  //   {post.credits && (
  //     <>
  //       <hr />
  //       <h1 className="mt-6 mb-2 text-default-contrastSecondary text-sm uppercase">
  //         Credits
  //       </h1>
  //       <ul>{creditsList}</ul>
  //     </>
  //   )}
  // </div>
  //   </WorkWrapper>
  // );
}

// export async function getStaticProps({ params }) {
//   const post = getPostBySlug(params.slug, [
//     "title",
//     "date",
//     "excerpt",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//     "jobTitle",
//     "projectYear",
//     "description",
//     "credits",
//   ]);
//   const content = await markdownToHtml(post.content || "");

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"]);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
