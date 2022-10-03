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
    <li className="text-sm mb-1" key={index}>
      {item.url ? (
        <a
          className="underline underline-offset-2 decoration-default-contrastSecondary/50 has-url"
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
      <header className="py-[15vh] border-b-default-contrastSecondary/30 border-b p-5 md:px-12">
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
            <h1 className="mt-5 mb-1 text-default-contrastSecondary text-xs uppercase">
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
