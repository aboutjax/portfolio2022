import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavLink({ url, label, location, id }) {
  return (
    <Link scroll={false} href={url}>
      <span
        className={`${
          location === id ? "text-default-contrastPrimary" : ""
        } cursor-pointer p-3 md:py-6 hover:text-default-contrastPrimary transition-colors shrink-0`}
      >
        {label}
      </span>
    </Link>
  );
}

const ThemeToggle = ({ setTheme }) => {
  return (
    <motion.button
      onClick={setTheme}
      className="rounded-full px-4 md:px-9 cursor-pointer"
      whileHover={{ scale: 1.5 }}
    >
      <div className="h-3 w-3 bg-default-contrastPrimary rounded-full border border-default-contrastPrimary flex items-center justify-center" />
    </motion.button>
  );
};

export default function Navbar({ navLocation, setTheme }) {
  const router = useRouter();
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    if (router.asPath === "/#intro") {
      setLocation("intro");
    } else if (router.asPath === "/#work") {
      setLocation("work");
    } else if (router.asPath === "/#wip") {
      setLocation("wip");
    } else if (router.asPath === "/#about") {
      setLocation("about");
    } else {
      setLocation("intro");
    }
  }, [router]);

  return (
    <div className="z-10 transition-colors top-0 sm:sticky w-full flex justify-between border-b border-b-default-contrastSecondary/30 bg-default/80 backdrop-blur-md">
      <nav
        className={`flex flex-nowrap w-full px-2 md:px-9 text-base font-regular text-default-contrastSecondary `}
      >
        <NavLink
          location={location}
          url="/#intro"
          label="Che Wei Lee"
          id="intro"
        />
        <NavLink location={location} url="/#work" label="Work" id="work" />
        <div className="hidden sm:block py-3 md:py-6">
          <NavLink
            location={location}
            url="/#wip"
            label="In Progress"
            id="wip"
          />
        </div>
        <NavLink location={location} url="/#about" label="About" id="about" />
      </nav>
      <ThemeToggle setTheme={setTheme} />
    </div>
  );
}
