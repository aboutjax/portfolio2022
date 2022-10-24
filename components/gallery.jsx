import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ImageWithCaption(props) {
  const { src, caption, span, children } = props;

  return (
    <motion.div className={`gallery--span-${span}`}>
      <div className="relative aspect-[4/3] w-full rounded bg-default-contrastSecondary/10">
        <Image objectFit="cover" layout="fill" alt={caption} src={src} />
      </div>
      <figcaption className="leading-tight text-default-contrastSecondary">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function ImageWithCaptionComposable(props) {
  const { src, caption, span, children } = props;

  return (
    <motion.div className={`gallery--span-${span}`}>
      <div className="relative aspect-[4/3] w-full">
        <Image objectFit="cover" layout="fill" alt={caption} src={src} />
      </div>
      <figcaption className="leading-tight text-default-contrastSecondary">
        {children}
      </figcaption>
    </motion.div>
  );
}

export function VideoWithCaption({ src, autoplay, controls, span, caption }) {
  return (
    <motion.div className={`gallery--span-${span}`}>
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
      <figcaption className="leading-tight text-default-contrastSecondary">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function VideoWithCaptionComposable({ src, span, children }) {
  return (
    <motion.div className={`gallery--span-${span}`}>
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
      <figcaption className="leading-tight text-default-contrastSecondary">
        {children}
      </figcaption>
    </motion.div>
  );
}

export function EmbedWithCaption({ src, span, caption }) {
  return (
    <motion.div className={`gallery--span-${span}`}>
      <iframe
        className="video aspect-video"
        width="100%"
        height="auto"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <figcaption className="leading-tight text-default-contrastSecondary">
        {caption}
      </figcaption>
    </motion.div>
  );
}

export function GalleryComposable(props) {
  const { children } = props;
  return (
    <motion.div className="gallery grid grid-cols-2 gap-4">
      {children}
    </motion.div>
  );
}
