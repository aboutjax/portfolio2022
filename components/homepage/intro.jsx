import React from "react";
import Section from "@/components/homepage/section";
import { motion, useScroll, useTransform } from "framer-motion";

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
        className="md:px-12 pt-[15vh] py-[10vh] md:py-[20vh] md:pt-[28vh]"
      >
        <motion.h1
          style={{ y, opacity }}
          className="relative text-lg md:text-xl text-default-contrastSecondary leading-heading font-xl tracking-tight max-w-6xl"
        >
          <motion.span
            className={
              language === "english"
                ? "inline-block bg-gradient-to-tr text-transparent from-default-contrastPrimary to-default-contrastSecondary bg-clip-text"
                : "relative cursor-pointer hover:inline-block transition-colors inline-block bg-gradient-to-tr text-transparent from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text"
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
                ? "inline-block bg-gradient-to-tr text-transparent from-default-contrastPrimary to-default-contrastSecondary bg-clip-text"
                : "relative cursor-pointer hover:text-default-contrastPrimary inline-block transition-colors bg-gradient-to-tr text-transparent from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text"
            }
            onClick={() => {
              handleClick("taiwanese");
            }}
          >
            ??????.
          </motion.span>{" "}
          <motion.span
            className={
              language === "mandarin"
                ? "inline-block bg-gradient-to-tr text-transparent from-default-contrastPrimary to-default-contrastSecondary bg-clip-text"
                : "relative cursor-pointer hover:text-default-contrastPrimary inline-block transition-colors bg-gradient-to-tr text-transparent from-default-contrastSecondary to-default-contrastPrimary/50 bg-clip-text"
            }
            onClick={() => {
              handleClick("mandarin");
            }}
          >
            ??????.
          </motion.span>
          {language === "english" && (
            <span>
              {" "}
              I&apos;m Che Wei Lee, a Product Designer and Developer made in
              Kaohsiung, Taiwan, raised in Auckland, New Zealand, now based in
              New York, USA.
            </span>
          )}
          {language === "taiwanese" && (
            <span>
              {" "}
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </span>
          )}
          {language === "mandarin" && (
            <span>
              {" "}
              ????????????????????????????????????/??????????????????????????????????????????????????????????????????????????????????????????????????????
            </span>
          )}
        </motion.h1>
      </Section>
    </div>
  );
}

export default Intro;
