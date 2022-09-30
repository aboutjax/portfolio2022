import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Layout({ children, navLocation }) {
  // All the available themes
  let themes = ["light", "night", "orange", "lime", "amber"];

  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    // Function to increment count by 1
    setCount(count + 1);

    // If it reaches the end of the themes cycle. Revert back to first theme.
    if (count === themes.length - 1) {
      setCount(0);
    }
  };

  return (
    <div
      className={`theme-${themes[count]} bg-default text-default-contrastPrimary min-h-screen transition-colors`}
    >
      <Head>
        <meta name="theme-color" content={"#FFFFFF"} />
      </Head>
      <Navbar navLocation={navLocation} setTheme={handleClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
