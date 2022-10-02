import React from "react";

function ExternalLink(props) {
  const { children, href } = props;
  return (
    <a
      href={href}
      target="blank"
      className="underline underline-offset-2 decoration-default-contrastSecondary"
    >
      {children}
    </a>
  );
}

export default ExternalLink;
