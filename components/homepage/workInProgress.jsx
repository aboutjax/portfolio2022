import React from "react";
import Card, { CardCarousel } from "@/components/card";
import Section from "@/components/homepage/section";
import SectionHeading from "@/components/homepage/sectionHeading";

function WorkInProgress({ posts }) {
  let list = posts.map((post) => {
    return (
      <CardCarousel
        key={post.slug}
        post={post}
        title={post.frontMatter.title}
        projectYear={post.frontMatter.projectYear}
        description={post.frontMatter.description}
        ogImage={post.frontMatter.ogImage}
        coverImages={post.frontMatter.coverImages}
      />
    );
  });
  return (
    <div>
      <Section id="wip" className="md:px-12 py-8 md:py-16">
        <SectionHeading
          title="In Progress"
          description="Experiments. Side Projects. Hobbies. Started but never finished."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.length < 1 ? (
            <h2 className="p-5 rounded bg-default-contrastSecondary/20 ">
              Coming soon
            </h2>
          ) : (
            list
          )}
        </div>
      </Section>
    </div>
  );
}

export default WorkInProgress;
