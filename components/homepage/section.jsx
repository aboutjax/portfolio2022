import { motion } from "framer-motion";
import React from "react";

export default function Section(props) {
  let { children, className, id } = props;

  return (
    <motion.section
      id={id}
      className={`p-5 scroll-m-0 sm:scroll-m-8 ${className ? className : ""}`}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 12 }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.section>
  );
}
