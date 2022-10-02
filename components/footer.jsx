import Link from "next/link";
import React from "react";

function ContactLink(props) {
  const { children, url, external } = props;
  return (
    <a
      href={url}
      target="blank"
      className="text-sm decoration-default-contrastSecondary/50 cursor-pointer"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <div className="w-full p-5 md:px-12 border-t-default-contrastSecondary/30 border-t">
      <nav className="flex gap-2">
        <Link
          className="text-sm decoration-default-contrastSecondary/50 cursor-pointer"
          href={"/"}
        >
          <span className="text-sm decoration-default-contrastSecondary/50 cursor-pointer">
            cheweilee.co
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
