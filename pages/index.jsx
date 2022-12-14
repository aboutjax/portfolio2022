import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import React from "react";
import About from "../components/homepage/about";
import Intro from "../components/homepage/intro";
import Work from "../components/homepage/work";
import WorkInProgress from "../components/homepage/workInProgress";

export default function Home({ posts }) {
  // Filter categories
  let workPosts = posts?.filter((post) => post.frontMatter.category === "work");
  let workInProgressPosts = posts?.filter(
    (post) => post.frontMatter.category === "work in progress"
  );

  return (
    <>
      <Head>
        <title>Che Wei Lee</title>
        <meta
          name="description"
          content="Hello. 哩賀. 你好. I'm Che Wei Lee, a Product Designer and Developer made in Kaohsiung, Taiwan, raised in Auckland, New Zealand, now based in New York, USA."
          key="description"
        />
        <meta property="og:image" content="/ogImage.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Work posts={workPosts} />
      <WorkInProgress posts={workInProgressPosts} />
      <About />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content"));

  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        frontMatter,
        slug: filename.split(".")[0],
      };
    })
    .sort((post1, post2) =>
      post1.frontMatter.date > post2.frontMatter.date ? -1 : 1
    )
    .filter((post) => {
      if (post.frontMatter.publish) {
        return post;
      } else {
      }
    });

  return {
    props: {
      posts,
    },
  };
};
