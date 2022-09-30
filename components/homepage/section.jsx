import React from "react";

export default function Section(props) {
  let { children, className, id } = props;

  return (
    <section
      id={id}
      className={`p-5 scroll-m-0 sm:scroll-m-8 ${className ? className : ""}`}
    >
      {children}
    </section>
  );
}
