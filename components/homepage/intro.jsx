import React from "react";
import Section from "@/components/homepage/section";
import { motion } from "framer-motion";

function Intro() {
  const [language, setLanguage] = React.useState("english");

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
          initial={{ opacity: 0, scale: 0.98, y: 4 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 0.1, duration: 1 },
          }}
          className="text-lg md:text-xl text-default-contrastSecondary leading-heading font-xl tracking-tight max-w-6xl"
        >
          <motion.span
            className={
              language === "english"
                ? "text-default-contrastPrimary inline-block"
                : "relative cursor-pointer hover:text-default-contrastPrimary inline-block transition-colors"
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
                ? "text-default-contrastPrimary inline-block"
                : "relative cursor-pointer hover:text-default-contrastPrimary inline-block transition-colors"
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
                ? "text-default-contrastPrimary inline-block"
                : "relative cursor-pointer hover:text-default-contrastPrimary inline-block transition-colors"
            }
            onClick={() => {
              handleClick("mandarin");
            }}
          >
            你好.
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
