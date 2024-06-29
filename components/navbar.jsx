import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavLink({ url, label, location, id }) {
  return (
    <Link scroll={false} href={url}>
      <span
        className={`${location === id ? "text-default-contrastPrimary font-medium" : ""
          } shrink-0 cursor-pointer p-3 transition-colors hover:text-default-contrastPrimary md:py-4`}
      >
        {label}
      </span>
    </Link>
  );
}

const themeToggleVariants = {
  default: { scale: 1 },
  hover: { scale: 1 },
  pressed: { scale: 1 },
};

const themeToggleDotVariants = {
  default: { scale: 1 },
  hover: {
    scale: 1.4,
    transition: { type: "spring", damping: 20, stiffness: 400 },
  },
  pressed: { scale: 0.9, transition: { duration: 0.1 } },
};

const ThemeToggle = ({ setTheme }) => {
  return (
    <motion.button
      onClick={setTheme}
      variants={themeToggleVariants}
      className="cursor-pointer rounded-full px-5 md:px-9"
      whileHover={"hover"}
      whileTap={"pressed"}
    >
      <motion.div
        variants={themeToggleDotVariants}
        className="flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border border-default-contrastPrimary bg-default-contrastPrimary bg-gradient-to-bl from-default-contrastSecondary to-default-contrastSecondary/10"
      />
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
    <div className="relative top-0 z-50 flex w-full justify-between border-b border-b-default-contrastSecondary/10 bg-default backdrop-blur-md transition-colors sm:sticky">
      <nav
        className={`font-regular flex w-full flex-nowrap px-2 text-base text-default-contrastSecondary md:px-9 `}
      >
        <NavLink
          location={location}
          url="/#intro"
          label="Che Wei Lee"
          id="intro"
        />
        <NavLink location={location} url="/#work" label="Work" id="work" />
        <NavLink location={location} url="/#about" label="About" id="about" />
      </nav>
      <ThemeToggle setTheme={setTheme} />
    </div>
  );
}
