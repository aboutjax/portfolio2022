import Link from "next/link";
import React from "react";

function ContactLink(props) {
  const { children, url, external } = props;
  return (
    <a
      href={url}
      target="blank"
      className="cursor-pointer text-sm decoration-default-contrastSecondary/50"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <div className="w-full border-t border-t-default-contrastSecondary/30 p-5 md:px-12">
      <nav className="flex gap-2">
        <Link
          className="cursor-pointer text-sm decoration-default-contrastSecondary/50"
          href={"/"}
        >
          <span className="cursor-pointer text-sm decoration-default-contrastSecondary/50">
            cheweilee.com
          </span>
        </Link>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink external={true} url="mailto:chewei.jacky.lee@gmail.com">
          Email
        </ContactLink>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink external={true} url="https://twitter.com/p0pmaker">
          Twitter
        </ContactLink>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink external={true} url="https://www.instagram.com/p0pmaker/">
          Instagram
        </ContactLink>
      </nav>
    </div>
  );
}

export default Footer;
