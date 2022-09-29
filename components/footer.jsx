import Link from "next/link";
import React from "react";

function ContactLink(props) {
  const { children, url } = props;
  return (
    <Link href={url}>
      <span className="text-sm decoration-default-contrastSecondary/50 cursor-pointer">
        {children}
      </span>
    </Link>
  );
}

function Footer() {
  return (
    <div className="w-full p-5 md:p-8 border-t-default-contrastSecondary/30 border-t">
      <nav className="flex gap-2">
        <ContactLink url="/">cheweilee.co</ContactLink>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink url="/">Email</ContactLink>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink url="/">Twitter</ContactLink>

        <span className="text-sm text-default-contrastSecondary/40">/</span>

        <ContactLink url="/">Instagram</ContactLink>
      </nav>
    </div>
  );
}

export default Footer;
