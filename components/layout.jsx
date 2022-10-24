import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children, navLocation }) {
  // All the available themes
  let themes = [
    "light",
    "amber",
    "lime",
    "yellow",
    "emerald",
    "sky",
    "night",
    "night-amber",
    "night-lime",
  ];
  let themesMetaColor = [
    "rgb(255, 255, 255)",
    "rgb(255, 251, 235)",
    "rgb(247, 254, 231)",
    "rgb(254 252 232)",
    "rgb(236 253 245)",
    "rgb(240 249 255)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
  ];

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem("theme-count")) {
      // found theme and use local
      let themeCountFromStorage = parseInt(localStorage.getItem("theme-count"));

      setCount(themeCountFromStorage);
    } else {
      localStorage.setItem("theme-count", 0);
    }
  }, []);

  const handleClick = () => {
    // Function to increment count by 1
    setCount(count + 1);

    let newCount = count + 1;

    localStorage.setItem("theme-count", newCount);

    // If it reaches the end of the themes cycle. Revert back to first theme.
    if (count === themes.length - 1) {
      setCount(0);
      localStorage.setItem("theme-count", 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`theme-${themes[count]} min-h-screen bg-default text-default-contrastPrimary transition-colors`}
    >
      <Head>
        <meta name="theme-color" content={themesMetaColor[count]} />
      </Head>
      <Navbar navLocation={navLocation} setTheme={handleClick} />

      <main className="relative z-20">{children}</main>
      <Footer />
    </motion.div>
  );
}

const Blob = () => {
  return (
    <motion.div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
      <div className="absolute top-0 right-0 z-10 h-full w-full backdrop-blur-3xl" />
      <motion.div className="z-0 h-[80vh] w-[80vh] rounded-full bg-default-contrastSecondary/10" />
    </motion.div>
  );
};
