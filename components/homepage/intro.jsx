import React from "react";
import Section from "@/components/homepage/section";
import { motion, useScroll, useTransform } from "framer-motion";

// Test

function Intro() {
  const [language, setLanguage] = React.useState("english");
  let { scrollYProgress, scrollY } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  let opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  // console.log(scrollYProgress);

  let handleClick = (language) => {
    setLanguage(language);
  };

  return (
    <div>
      <Section
        id="intro"
        className="py-[10vh] pt-[15vh] md:px-12 md:py-[20vh] md:pt-[28vh]"
      >
        <motion.h1
          style={{ y, opacity }}
          className="relative max-w-[24ch] text-lg font-medium leading-heading text-default-contrastPrimary md:text-xl"
        >
          <motion.span
            className={
              language === "english"
                ? "inline-block bg-gradient-to-tr from-default-contrastPrimary to-default-contrastSecondary bg-clip-text text-transparent"
                : "relative inline-block cursor-pointer bg-gradient-to-tr from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text text-transparent transition-colors hover:inline-block"
            }
            onClick={() => {
              handleClick("english");
            }}
          >
            Hello.
          </motion.span>{" "}
          <motion.span
            className={
              language === "taiwanese"
                ? "inline-block bg-gradient-to-tr from-default-contrastPrimary to-default-contrastSecondary bg-clip-text text-transparent"
                : "relative inline-block cursor-pointer bg-gradient-to-tr from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text text-transparent transition-colors hover:text-default-contrastPrimary"
            }
            onClick={() => {
              handleClick("taiwanese");
            }}
          >
            哩賀.
          </motion.span>{" "}
          <motion.span
            className={
              language === "mandarin"
                ? "inline-block bg-gradient-to-tr from-default-contrastPrimary to-default-contrastSecondary bg-clip-text text-transparent"
                : "relative inline-block cursor-pointer bg-gradient-to-tr from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text text-transparent transition-colors hover:text-default-contrastPrimary"
            }
            onClick={() => {
              handleClick("mandarin");
            }}
          >
            你好.
          </motion.span>
          {language === "english" && (
            <span className="leading-none tracking-tighter">
              {" "}
              I&apos;m Che Wei Lee, a Product Designer and Developer made in
              Kaohsiung, Taiwan, raised in Auckland, New Zealand, now based in
              New York, USA.
            </span>
          )}
          {language === "taiwanese" && (
            <span>
              {" "}
              我是李哲瑋，是一名產品設計工程師，我出世佇台灣高雄，毋過我佇紐西蘭奧克蘭市讀冊大漢，現在我佇咧美國紐約食頭路。
            </span>
          )}
          {language === "mandarin" && (
            <span>
              {" "}
              我是李哲瑋，一位產品設計/工程師。高雄，台灣製造。在奧克蘭，紐西蘭長大。目前居住於紐約，美國。
            </span>
          )}
        </motion.h1>
      </Section>
    </div>
  );
}

export default Intro;
