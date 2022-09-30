import React from "react";
import Section from "@/components/homepage/section";
import SectionHeading from "@/components/homepage/sectionHeading";

const education = [
  {
    label: "Master of Architecture (Prof), Architecture",
    description: "The University of Auckland (2011–2012)",
  },

  {
    label: "Bachelor of Architectural Studies (BAS), Architecture",
    description: "The University of Auckland (2008–2011)",
  },
];

const experience = [
  {
    label: "Wahoo Fitness",
    description: "2019–Present",
  },
  {
    label: "Koordinates",
    description: "2017–2019",
  },
  {
    label: "Vend by Lightspeed",
    description: "2014–2016",
  },
  {
    label: "AECOM",
    description: "2012–2014",
  },
];

const talks = [
  {
    label: "Introduction to Framer",
    description: "Roam Digital, Auckland, New Zealand (2020)",
  },
  {
    label: "Jacky Lee, Designer + Developer",
    description: "Bézier, design interview podcast (2020)",
    url: "https://anchor.fm/bezier/episodes/Jacky-Lee--Designer--Developer-ef5mvb",
  },
  {
    label: "Prototyping with Bluetooth Devices",
    description: "Framer Loupe, Amsterdam (2019)",
  },
  {
    label: "Design with Code",
    description: "Crimson Education, Auckland, New Zealand (2018)",
  },
  {
    label: "Aeropress Timer",
    description: "Framer Seattle Meetup, Microsoft, Redmond, WA (2018)",
  },
  {
    label: "Banana, Strava Visualizer",
    description: "UX/CX Collab, Pixel Fusion, Auckland, New Zealand (2018)",
  },
  {
    label: "Banana, Strava Visualizer",
    description: "Auckland CSS, New Zealand (2018)",
  },
  {
    label: "Framer Workshop",
    description: "Pushpay, Auckland, New Zealand (2017)",
  },
  {
    label: "Prototyping with Quartz Composter & Framer.js",
    description: "Cactus Labs, iOS Meet, Auckland, New Zealand (2015)",
  },
  {
    label: "Auckland Dribbble Meetup",
    description: "Auckland, New Zealand (2015)",
  },
];

const editorial = [
  {
    label: "Why I Blur the Lines Between Prototype and Real Product",
    description: "Framer Blog",
    url: "https://web.archive.org/web/20210226095712/https://www.framer.com/blog/posts/blurring-lines-with-prototypes/",
  },
  {
    label: "Blurring the Lines Between Prototype and Real Product",
    description: "Wahoo Product Design",
    url: "https://medium.com/wahoo-product-design/blurring-the-lines-between-prototype-and-real-product-4687b624442d",
  },
  {
    label: "Wahoo Onboarding Wizard",
    description: "Wahoo Product Design",
    url: "https://medium.com/wahoo-product-design/new-on-wahoo-setup-wizard-b900f290c322",
  },
  {
    label: "Being a rookie & maintaining a healthy balance of work",
    description: "The Creative Series by Femke van Schoonhoven",
    url: "https://medium.com/the-creatives-series/jacky-lee-on-being-a-rookie-and-maintaining-a-healthy-balance-of-work-24f95483aac9",
  },
  {
    label: "Designing Vend's New Point-of-sale",
    description: "Vend Design (2015)",
    url: "https://medium.com/we-build-vend/the-inside-scoop-designing-vend-s-new-point-of-sale-3e392f12955",
  },
  {
    label: "Framer rotate image array module (Part 1)",
    description: "Vend Design (2015)",
    url: "https://medium.com/we-build-vend/framer-looping-carousel-module-part-1-5dd997cc1e9b",
  },
  {
    label: "Framer rotate image array module (Part 2)",
    description: "Vend Design (2015)",
    url: "https://medium.com/we-build-vend/framer-rotate-image-array-module-part-2-d1580a63dc4b",
  },
];

const awards = [
  {
    label: "Design Innovation Award (Equipment) — Wahoo KICKR Ecosystem (2019)",
    description: "Wahoo Fitness",
  },
  {
    label:
      "Core77 Design Awards (Heath & Wellness Runner Up) — Wahoo KICKR Indoor Cycling Ecosystem (2019)",
    description: "Wahoo Fitness",
  },
  {
    label: "CRC Customer Choice Awards — Wahoo ELEMNT Bolt (2019)",
    description: "Wahoo Fitness",
  },
  {
    label: "CRC Customer Choice Awards — Wahoo KICKR CORE Smart Trainer (2019)",
    description: "Wahoo Fitness",
  },
  {
    label:
      "T3 Awards: Best Home Fitness Tech (Nominated) — Wahoo KICKR Climb (2018)",
    description: "Wahoo Fitness",
  },
  {
    label:
      "The New Zealand Spatial Excellence Awards: Environment and Sustainability — Land Information New Zealand (Koordinates) (2017)",
    description: "Koordinates",
  },
  {
    label:
      "NZ Hi-Tech Awards — IBM Hi-Tech Exporter of the Year (under $5 million revenue) and Cisco Hi-Tech Emerging Company of the Year categories — Vend (2014)",
    description: "Vend by Lightspeed",
  },
  {
    label: "NZIA Graphisoft Student Design Awards: Highly Commended (2012)",
    description: "Architecture School",
  },
];

function List({ items, header }) {
  const list = items.map((item, index) => (
    <li key={index} className="text-sm mb-1">
      {item.url ? (
        <a href={item.url} target="blank">
          <span className="underline underline-offset-2 has-url decoration-default-contrastSecondary/50">
            {item.label}
          </span>
        </a>
      ) : (
        <span className="">{item.label}</span>
      )}

      <span className="text-default-contrastSecondary">
        <span className="mx-1">—</span>
        {item.description}
      </span>
    </li>
  ));
  return (
    <div className="mb-12">
      <h2 className="text-xs uppercase text-default-contrastSecondary mb-1">
        {header}
      </h2>
      <ul>{list}</ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <Section id="about" className="md:px-12 py-8 md:py-16">
        <SectionHeading title="About" />
        <p className="text-base max-w-lg mb-8">
          Hey, I&apos;m Che Wei (Sounds like: Zhé wěi), you can also call me
          Jacky. I&apos;m a designer, developer, and cycling fanatic. I&apos;m
          currently based in New York City, remotely helping{" "}
          <a
            className="underline underline-offset-2"
            href="https://wahoofitness.com"
          >
            Wahoo Fitness
          </a>{" "}
          build world-class training experiences for endurance athletes.
        </p>
        <p className="text-base max-w-lg mb-8">
          Before Wahoo, I designed geospatial data management platform for{" "}
          <a
            className="underline underline-offset-2"
            href="https://koordinates.com"
          >
            Koordinates
          </a>
          , lead the design system and process for their web application,
          contributing to the securement of multiple government contracts, like
          Land Information New Zealand and Stats NZ, for using Koordinates as
          their official data portals.
        </p>
        <p className="text-base max-w-lg mb-8">
          Before Koordinates, I designed for retail point-of-sale experiences at{" "}
          <a className="underline underline-offset-2" href="https://vendhq.com">
            Vend by Lightspeed
          </a>
          . I assisted in various prototyping and user testing tasks, and worked
          closely with developers to ensure high quality releases.
        </p>
        <p className="text-base max-w-lg mb-8">
          When I&apos;m not staring at a screen, you can find me cycling about
          on{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.strava.com/athletes/1105155"
          >
            Strava
          </a>
          , taking photos on{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.instagram.com/p0pmaker/"
          >
            Instagram
          </a>
          , practicing{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.instagram.com/p0pletter/"
          >
            hand lettering
          </a>
          , or playing games on{" "}
          <a
            className="underline underline-offset-2"
            href="https://account.xbox.com/en-us/Profile?xr=mebarnav&rtc=1"
          >
            Xbox
          </a>
          .
        </p>

        <List header="Education" items={education} />
        <List header="Experience" items={experience} />
        <List header="Talks / Workshops" items={talks} />
        <List header="Editorial" items={editorial} />
        <List header="Awards / Recognition" items={awards} />
      </Section>
    </div>
  );
}

export default About;
