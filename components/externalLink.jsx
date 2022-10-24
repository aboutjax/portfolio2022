import React from "react";

function ExternalLink(props) {
  const { children, href } = props;
  return (
    <a
      href={href}
      target="blank"
      className="underline decoration-default-contrastSecondary underline-offset-2"
    >
      {children}
    </a>
  );
}

export default ExternalLink;
