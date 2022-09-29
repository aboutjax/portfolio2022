import React from "react";
import Section from "./Section";

function Intro() {
  return (
    <div>
      <Section id="intro" className="md:px-12 py-[15vh] md:py-[30vh]">
        <h1 className="text-lg md:text-xl text-default-contrastSecondary leading-heading font-xl tracking-tight max-w-6xl">
          <span className="text-default-contrastPrimary">Hello.</span> Lí hó.
          你好. I&apos;m Che Wei Lee, a Product Designer and Developer made in
          Kaohsiung, Taiwan, raised in Auckland, New Zealand, now based in New
          York, USA.
        </h1>
      </Section>
    </div>
  );
}

export default Intro;
