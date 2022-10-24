import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1663630487487-05d4f899da6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1563&q=80";

export function CardContained(props) {
  const { post, context } = props;
  return (
    <Link href={`posts/${post.slug}`} scroll={false}>
      <motion.div
        whileHover={{ opacity: 0.8 }}
        style={{
          backgroundImage: `url(${placeholderImageUrl})`,
          backgroundSize: "110%",
          backgroundPosition: "center center",
        }}
        className={`aspect-[16/9] md:aspect-[4/2] ${
          context === "work" ? "md:first:col-span-2 lg:first:col-span-2" : ""
        }  group flex cursor-pointer flex-col justify-end rounded-lg  bg-default-contrastSecondary/10 p-3 transition-all lg:p-5 `}
      >
        <h2 className="text-sm uppercase text-default-contrastSecondary">
          <strong className="mr-1 font-xl text-default-contrastPrimary">
            {props.title}
          </strong>
        </h2>
        <span className="text-xs text-default-contrastPrimary md:text-sm">
          {" "}
          {props.projectYear}
        </span>
      </motion.div>
    </Link>
  );
}

function CardGallery(props) {
  let { images, priority } = props;
  let list = images.map((image, index) => (
    <div
      key={index}
      className="relative aspect-[4/3] h-full w-full snap-center"
    >
      <Image
        objectFit="cover"
        layout="fill"
        alt={""}
        src={image}
        priority={priority ? true : false}
      />
    </div>
  ));
  return (
    <motion.div className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
      {list}
    </motion.div>
  );
}

function Card(props) {
  const { post, context, ogImage, coverImages } = props;

  return (
    <Link href={`posts/${post.slug}`} scroll={true}>
      <motion.div
        whileHover={{ opacity: 0.8 }}
        className={`aspect-[4/3] md:aspect-[4/3] ${
          context === "work" ? "md:first:col-span-2 lg:first:col-span-2" : ""
        }  align-start group  mb-4 flex cursor-pointer flex-col`}
      >
        <div
          style={{
            backgroundImage: `url(${
              ogImage ? ogImage.url : placeholderImageUrl
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="mb-2  h-full w-full rounded-lg bg-default-contrastPrimary/10 transition-all"
        />

        <h2 className="text-sm uppercase text-default-contrastSecondary">
          <strong className="mr-1 font-semibold text-default-contrastPrimary">
            {props.title}, {props.projectYear}
          </strong>
        </h2>
        <span className="text-xs text-default-contrastSecondary md:text-sm">
          {" "}
          {props.description}
        </span>
      </motion.div>
    </Link>
  );
}

export function CardCarousel(props) {
  const { post, context, coverImages, priority } = props;

  return (
    <Link href={`posts/${post.slug}`} scroll={true}>
      <motion.div
        whileHover={{ opacity: 0.8 }}
        className={`aspect-[4/3] md:aspect-[4/3] ${
          context === "work" ? "md:first:col-span-2 lg:first:col-span-2" : ""
        }  align-start group  mb-4 flex cursor-pointer flex-col `}
      >
        <div className="z-0 mb-2 h-full w-full overflow-hidden rounded-lg border border-default-contrastSecondary/20 bg-default-contrastPrimary/10 transition-all">
          <CardGallery images={coverImages} priority={priority} />
        </div>
        <h2 className="mt-1 text-sm uppercase text-default-contrastSecondary">
          <strong className="mr-1 font-semibold text-default-contrastPrimary">
            {props.title}, {props.projectYear}
          </strong>
        </h2>
        <span className="text-xs text-default-contrastSecondary md:text-sm">
          {props.description}
        </span>
      </motion.div>
    </Link>
  );
}

export default Card;
