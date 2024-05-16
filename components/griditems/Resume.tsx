import React from "react";
import { motion } from "framer-motion";

export const Resume = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="dark:bg-slate-700 bg-[#F6F2F2] rounded-[20px]  max-[481px]:text-sm max-[481px]:w-[140px] max-[481px]:h-[60px] py-3 px-6 lg:text-lg shadow-lg"
      onMouseDown={(e: any) => {
        e.stopPropagation();
        window.open(
          "https://www.figma.com/design/u66RwlyQAFmU2sFUc2HPvR/Untitled?node-id=0-1&t=mcm1oe6r5jX0khlz-0"
        );
      }}
    >
      Click to review my CV
    </motion.button>
  );
};
