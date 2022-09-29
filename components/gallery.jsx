import React from "react";
import Image from "next/image";

export function ImageWithCaption(props) {
  const { src, caption, alt, span } = props;

  return (
    <div className={`gallery--span-${span}`}>
      <div className="w-full aspect-[4/3] relative">
        <Image objectFit="cover" layout="fill" alt={alt} src={src} />
      </div>
      <figcaption className="mt-1">{caption}</figcaption>
    </div>
  );
}

export function GalleryComposable(props) {
  const { children } = props;
  return <div className="gallery grid grid-cols-2 gap-4">{children}</div>;
}
