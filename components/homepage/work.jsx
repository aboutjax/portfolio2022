import React from "react";
import Card, { CardCarousel } from "@/components/card";
import Section from "@/components/homepage/section";
import SectionHeading from "./sectionHeading";

function Work({ posts }) {
  let list = posts.map((post) => {
    return (
      <CardCarousel
        context="work"
        key={post.slug}
        post={post}
        title={post.frontMatter.title}
        projectYear={post.frontMatter.projectYear}
        ogImage={post.frontMatter.ogImage}
        coverImages={post.frontMatter.coverImages}
      />
    );
  });
  return (
    <div>
      <Section id="work" className="md:px-12 py-8 md:py-16">
        <SectionHeading title="Work" description="Stuff that was shipped." />
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4">
          {list}
        </div>
      </Section>
    </div>
  );
}

export default Work;
