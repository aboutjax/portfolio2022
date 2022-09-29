import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children, navLocation }) {
  let themes = ["default", "amber", "lime", "orange", "light"];
  const [theme, setTheme] = React.useState("default");
  const [count, setCount] = React.useState(0);

  let toggleTheme = () => {
    let themeName = themes[count];

    // Function to increment count by 1
    // Update state with incremented value
    setCount(count + 1);

    console.log(themeName);
    setTheme(themeName);

    if (count === themes.length) {
      setCount(0);
    }

    // let newCounter = counter + 1;
    // counter = newCounter;

    // console.log(counter, newCounter);
    // setTheme(themes[2]);

    // if (theme === "default") {
    //   setTheme(themes[0]);
    // } else {
    //   setTheme("default");
    // }
  };

  // React.useEffect(()=>{

  //   if(theme === 'default') {

  //   }
  // },[theme])

  return (
    <div
      className={`theme-${theme} bg-default text-default-contrastPrimary min-h-screen transition-colors`}
    >
      <Navbar navLocation={navLocation} setTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
