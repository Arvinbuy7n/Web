"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export const Ecommerce = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url('https://i.redd.it/aq099c4j1wt91.jpg')`,
      }}
    >
      <div className="">
        <img
          src="./Ecommerce.png"
          style={{
            transform: "rotate(-28deg)",
            transformOrigin: "80% 40%",
            maxWidth: "350px",
            maxHeight: "200px",
            borderRadius: "32px",
            objectFit: "cover",
            overflow: "hidden",
            margin: "auto",
            display: "block",
          }}
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[220px] max-[481px]:h-[140px] min-[1250px]:w-[500px] min-[1250px]:h-[300px] object-cover border border-slate-50 rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <MdArrowOutward
              size={40}
              className={`p-3 w-22 h-10 bg-slate-200 text-black rounded-[32px] hover:scale-x-10 transition-transform ${isHovered ? "scale-x-100" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={(e) => {
                e.stopPropagation();
                window.open("https://team-4-bash.vercel.app/");
              }}
            />
          </motion.button>
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
    </div>
  );
};

export const FoodDelivery = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url('./foodback.jpg')`,
      }}
    >
      <div className="">
        <img
          src="./fooddelivery.png"
          style={{
            transform: "rotate(-28deg)",
            transformOrigin: "80% 40%",
            maxWidth: "350px",
            maxHeight: "200px",
            borderRadius: "32px",
            objectFit: "cover",
            overflow: "hidden",
            margin: "auto",
            display: "block",
          }}
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[220px] max-[481px]:h-[140px] min-[1250px]:w-[500px] min-[1250px]:h-[300px] object-cover rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <MdArrowOutward
              size={40}
              className={`p-3 w-22 h-10 bg-slate-200 text-black rounded-[32px] hover:scale-x-10 transition-transform ${isHovered ? "scale-x-100" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={(e) => {
                e.stopPropagation();
                window.open("https://fooddelivery-chekist-pi.vercel.app/");
              }}
            />
          </motion.button>
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
    </div>
  );
};

export const ExpenseTrack = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url('https://preview.redd.it/65dawpwi1wt91.jpg?width=1080&crop=smart&auto=webp&s=5c6a71a7ce5e3602a6c3e7d45f5357765451c907')`,
      }}
    >
      <div className="">
        <img
          src="./sig.png"
          style={{
            transform: "rotate(-28deg)",
            transformOrigin: "80% 40%",
            maxWidth: "350px",
            maxHeight: "200px",
            borderRadius: "32px",
            objectFit: "contain",
            overflow: "hidden",
            margin: "auto",
            display: "block",
          }}
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[220px] max-[481px]:h-[140px] min-[1250px]:w-[500px] min-[1250px]:h-[300px] object-cover rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <MdArrowOutward
              size={40}
              className={`p-3 w-22 h-10 bg-slate-200 text-black rounded-[32px] hover:scale-x-10 transition-transform ${isHovered ? "scale-x-100" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={(e) => {
                e.stopPropagation();
                window.open("https://fooddelivery-chekist-pi.vercel.app/");
              }}
            />
          </motion.button>
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
    </div>
  );
};

export const BlankProject = () => {
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover flex justify-center items-center dark:text-white  text-[#0F1117]"
      style={{
        backgroundImage: `url('./blankprojback.jpg')`,
      }}
    >
      Project will be added here.
    </div>
  );
};
