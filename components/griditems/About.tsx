import { siteConfig } from "@/config/site-config";
import React from "react";

export const About = () => {
  return (
    <div className="flex max-md:flex-col items-center space-x-3 gap-6">
      <div className="select-none max-md:size-[130px]">
        <img
          alt="avatar"
          src="profile.jpeg"
          sizes="full"
          className="object-cover rounded-[60%] w-60"
          loading="eager"
        />
      </div>
      <div className="text-center md:text-left">
        <div className="text-slate-900  dark:text-slate-100">
          <div className="text-xl  min-md:text-lg font-semibold text-primary select-none">
            {siteConfig.title}
          </div>
          <h1 className="text-4xl min-md:text-2xl font-bold my-2  select-none">
            {siteConfig.creator}
          </h1>
        </div>
        <p className="text-2xl min-md:text-xl font-semibold text-slate-900 dark:text-slate-100 select-none">
          {siteConfig.bio}
        </p>
      </div>
    </div>
  );
};
