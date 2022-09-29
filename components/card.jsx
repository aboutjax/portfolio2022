import { motion } from "framer-motion";
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
        }  group cursor-pointer flex flex-col justify-end bg-default-contrastSecondary/10  transition-all rounded-lg p-3 lg:p-5 `}
      >
        <h2 className="uppercase text-sm text-default-contrastSecondary">
          <strong className="font-xl text-default-contrastPrimary mr-1">
            {props.title}
          </strong>
        </h2>
        <span className="text-xs md:text-sm text-default-contrastPrimary">
          {" "}
          {props.projectYear}
        </span>
      </motion.div>
    </Link>
  );
}

function Card(props) {
  const { post, context, ogImage } = props;

  return (
    <Link href={`posts/${post.slug}`} scroll={true}>
      <motion.div
        whileHover={{ opacity: 0.8 }}
        className={`aspect-[16/12] md:aspect-[4/3] ${
          context === "work" ? "md:first:col-span-2 lg:first:col-span-2" : ""
        }  group cursor-pointer  flex flex-col align-start mb-4`}
      >
        <div
          style={{
            backgroundImage: `url(${
              ogImage ? ogImage.url : placeholderImageUrl
            })`,
            backgroundSize: "120%",
            backgroundPosition: "center center",
          }}
          className="rounded-lg h-full w-full bg-default-contrastPrimary/10 mb-2 transition-all"
        />
        <h2 className="uppercase text-sm text-default-contrastSecondary">
          <strong className="font-semibold text-default-contrastPrimary mr-1">
            {props.title}, {props.projectYear}
          </strong>
        </h2>
        <span className="text-xs md:text-sm text-default-contrastSecondary">
          {" "}
          {props.description}
        </span>
      </motion.div>
    </Link>
  );
}

export default Card;
