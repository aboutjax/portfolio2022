import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import React from "react";
import Button from "@/components/button";
import Head from "next/head";
import {
  GalleryComposable,
  ImageWithCaption,
  ImageWithCaptionComposable,
  VideoWithCaption,
  VideoWithCaptionComposable,
  EmbedWithCaption,
} from "@/components/gallery";
import PostBody from "@/components/post-body";
import WorkWrapper from "@/components/workWrapper";

const components = {
  Button,
  ImageWithCaption,
  GalleryComposable,
  ImageWithCaptionComposable,
  VideoWithCaption,
  EmbedWithCaption,
  VideoWithCaptionComposable,
};

export default function Post({ frontMatter, mdxSource }) {
  let creditsList = frontMatter.credits?.map((item, index) => (
    <li className="mb-1 text-sm" key={index}>
      {item.url ? (
        <a
          className="has-url underline decoration-default-contrastSecondary/50 underline-offset-2"
          href={item.url}
        >
          {item.name}
        </a>
      ) : (
        item.name
      )}
    </li>
  ));

  return (
    <WorkWrapper>
      <Head>
        <title>{`${frontMatter.title} - Che Wei Lee`}</title>
        <meta
          name="description"
          content={`${frontMatter.description}`}
          key="title"
        />
        <meta
          property="og:title"
          content={`Che Wei Lee - ${frontMatter.title}`}
        />
        <meta property="og:image" content={frontMatter.ogImage.url} />
      </Head>
      <header className="border-b border-b-default-contrastSecondary/30 p-5 py-[15vh] md:px-12">
        <p className="text-sm text-default-contrastSecondary md:text-base">
          {frontMatter.jobTitle && `${frontMatter.jobTitle}, `}
          {frontMatter.projectYear}
        </p>
        <h1 className="mb-1 text-xl font-xl leading-heading tracking-tight md:text-2xl">
          {frontMatter.title}
        </h1>
        <p className="max-w-2xl text-base text-default-contrastPrimary md:text-lg">
          {frontMatter.excerpt}
        </p>
      </header>

      <div className="p-5 md:p-12">
        <PostBody mdxSource={mdxSource} components={components} />
        {frontMatter.credits && (
          <>
            <hr className="border-default-contrastSecondary/30" />
            <h1 className="mt-5 mb-1 text-xs uppercase text-default-contrastSecondary">
              Credits
            </h1>
            <ul>{creditsList}</ul>
          </>
        )}
      </div>
    </WorkWrapper>
  );
}

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
