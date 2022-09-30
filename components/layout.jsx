import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

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
    <div
      className={`theme-${themes[count]} bg-default text-default-contrastPrimary min-h-screen transition-colors`}
    >
      <Head>
        <meta name="theme-color" content={themesMetaColor[count]} />
      </Head>
      <Navbar navLocation={navLocation} setTheme={handleClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
