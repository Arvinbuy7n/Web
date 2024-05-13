'use client';

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutContext } from '@/context/layout-context';

const Header = () => {
  const { showAllGrid, showAbout, showProject } = useContext(LayoutContext);
  const [headerTitles] = useState([
    { name: 'All', isActive: true },
    { name: 'About', isActive: false },
    { name: 'Project', isActive: false },
  ]);

  return (
    <div className="flex justify-around items-center max-md:flex-col max-md:gap-4 py-4 mt-4 dark:text-white text-black max-w-[1250px] mx-auto ">
      <p className="text-[22px] font-bold font-serif">Arvinbuyan.O</p>

      <div className="dark:bg-[#172439] flex items-center justify-center lg:gap-8 h-10 border-2 border-[#31363d] border-opacity-50 rounded-full px-2 lg:text-lg md:text-md sm:text-sm xs:text-xs shadow-2xl">
        <button className={`hover:bg-slate-300 rounded-full px-3 `} onClick={showAllGrid}>
          {headerTitles[0].name}
        </button>
        <button className="hover:bg-slate-300 rounded-full px-2" onClick={showAbout}>
          {headerTitles[1].name}
        </button>
        <button className="hover:bg-slate-300 rounded-full px-2" onClick={showProject}>
          {headerTitles[2].name}
        </button>
      </div>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="max-md:text-xl max-md:hidden">
        <a href="">Contact me</a>
      </motion.button>
    </div>
  );
};

export default Header;
