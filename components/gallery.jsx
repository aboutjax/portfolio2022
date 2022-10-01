import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ImageWithCaption(props) {
  const { src, caption, span, children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`gallery--span-${span}`}
    >
      <div className="w-full aspect-[4/3] relative bg-default-contrastSecondary/10 rounded">
        <Image objectFit="cover" layout="fill" alt={caption} src={src} />
      </div>
      <figcaption className="text-default-contrastSecondary leading-tight">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function ImageWithCaptionComposable(props) {
  const { src, caption, span, children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`gallery--span-${span}`}
    >
      <div className="w-full aspect-[4/3] relative">
        <Image objectFit="cover" layout="fill" alt={caption} src={src} />
      </div>
      <figcaption className="text-default-contrastSecondary leading-tight">
        {children}
      </figcaption>
    </motion.div>
  );
}

export function VideoWithCaption({ src, autoplay, controls, span, caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`gallery--span-${span}`}
    >
      <video
        src={src}
        playsInline={true}
        autoPlay={true}
        loop={true}
        type="video/mp4"
        controls={true}
        muted={true}
        className="w-full"
      />
      <figcaption className="text-default-contrastSecondary leading-tight">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function EmbedWithCaption({ src, span, caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`gallery--span-${span}`}
    >
      <iframe
        className="video aspect-video"
        width="100%"
        height="auto"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <figcaption className="text-default-contrastSecondary leading-tight">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function GalleryComposable(props) {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="gallery grid grid-cols-2 gap-4"
    >
      {children}
    </motion.div>
  );
}
