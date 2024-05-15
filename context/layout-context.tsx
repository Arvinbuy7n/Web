"use client";

import React, { PropsWithChildren, createContext, useState } from "react";

interface ILayoutContext {
  layoutState: any;
  layoutSmState: any;
  showAllGrid: () => void;
  showAbout: () => void;
  showMedia: () => void;
  showProject: () => void;
}

export const LayoutContext = createContext({} as ILayoutContext);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 1 }, //profile
    { i: "c", x: 1, y: 1, w: 1, h: 1 }, //dark mode
    { i: "d", x: 4, y: 1, w: 1, h: 2 }, // food
    { i: "g", x: 1, y: 2, w: 1, h: 1 }, //cv
    { i: "h", x: 3, y: 3, w: 2, h: 1 }, //blank
    { i: "e", x: 0, y: 0, w: 1, h: 2 }, //ecommerce
    { i: "f", x: 4, y: 0, w: 2, h: 1 }, //skills
    { i: "j", x: 2, y: 2, w: 1, h: 1 }, //github
    { i: "i", x: 2, y: 2, w: 1, h: 1 }, //empty
    { i: "l", x: 0, y: 3, w: 2, h: 1 }, //income
  ];
  const layoutsm = [
    { i: "a", x: 0, y: 0, w: 2, h: 1.2 },
    { i: "c", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "d", x: 3, y: 0, w: 1, h: 1.2 },
    { i: "g", x: 0, y: 1, w: 1, h: 0.6 },
    { i: "h", x: 3, y: 3, w: 1, h: 1.2 },
    { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
    { i: "f", x: 1, y: 1, w: 2, h: 0.6 },
    { i: "j", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "i", x: 0, y: 1, w: 1, h: 0.6 },
    { i: "l", x: 0, y: 1, w: 1, h: 1.2 },
  ];
  const [layoutState, setLayoutState] = useState<any>(layout);
  const [layoutSmState, setLayoutSmState] = useState<any>(layoutsm);

  const showAllGrid = () => {
    setLayoutState([
      { i: "a", x: 0, y: 0, w: 2, h: 1 },
      { i: "c", x: 1, y: 0, w: 1, h: 1 },
      { i: "d", x: 4, y: 1, w: 1, h: 2 },
      { i: "g", x: 1, y: 0, w: 1, h: 1 },
      { i: "h", x: 0, y: 4, w: 2, h: 1 },
      { i: "e", x: 0, y: 0, w: 1, h: 2 },
      { i: "f", x: 4, y: 0, w: 2, h: 1 },
      { i: "j", x: 2, y: 0, w: 1, h: 1 },
      { i: "i", x: 2, y: 3, w: 1, h: 1 },
      { i: "l", x: 2, y: 3, w: 2, h: 1 },
    ]);
    setLayoutSmState([
      { i: "a", x: 0, y: 0, w: 2, h: 1.2 },
      { i: "c", x: 2, y: 0, w: 1, h: 0.6 },
      { i: "d", x: 3, y: 0, w: 1, h: 1.2 },
      { i: "g", x: 0, y: 1, w: 1, h: 0.6 },
      { i: "h", x: 3, y: 3, w: 2, h: 1 },
      { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
      { i: "f", x: 1, y: 1, w: 2, h: 0.6 },
      { i: "j", x: 2, y: 0, w: 1, h: 0.6 },
      { i: "i", x: 0, y: 1, w: 1, h: 0.6 },
      { i: "l", x: 0, y: 1, w: 1, h: 1.2 },
    ]);
  };

  const showAbout = () => {
    setLayoutState([
      { i: "a", x: 0, y: 0, w: 2, h: 1 },
      { i: "c", x: 2, y: 1, w: 1, h: 1 },
      { i: "d", x: 4, y: 1, w: 0, h: 0 },
      { i: "g", x: 0, y: 0, w: 1, h: 1 },
      { i: "h", x: 1, y: 2, w: 0, h: 0 },
      { i: "e", x: 0, y: 0, w: 0, h: 0 },
      { i: "f", x: 4, y: 0, w: 2, h: 1 },
      { i: "j", x: 1, y: 0, w: 1, h: 1 },
      { i: "i", x: 3, y: 3, w: 1, h: 1 },
      { i: "k", x: 3, y: 3, w: 0, h: 0 },
    ]);
    setLayoutSmState([
      { i: "a", x: 0, y: 0, w: 2, h: 1.2 },
      { i: "c", x: 1, y: 0, w: 0, h: 0 },
      { i: "d", x: 0, y: 1, w: 0, h: 0 },
      { i: "g", x: 0, y: 1, w: 1, h: 0.6 },
      { i: "h", x: 1, y: 2, w: 0, h: 0 },
      { i: "e", x: 0, y: 1, w: 0, h: 0 },
      { i: "f", x: 0, y: 0, w: 2, h: 0.6 },
      { i: "j", x: 1, y: 0, w: 1, h: 0.6 },
      { i: "i", x: 3, y: 3, w: 0, h: 0 },
      { i: "k", x: 3, y: 3, w: 0, h: 0 },
    ]);
  };

  const showProject = () => {
    setLayoutState([
      { i: "", x: 0, y: 0, w: 0, h: 0 },
      { i: "", x: 1, y: 0, w: 0, h: 0 },
      { i: "d", x: 1, y: 0, w: 1, h: 2 },
      { i: "", x: 1, y: 0, w: 0, h: 0 },
      { i: "h", x: 3, y: 0, w: 1, h: 2 },
      { i: "e", x: 0, y: 0, w: 1, h: 2 },
      { i: "", x: 0, y: 0, w: 0, h: 0 },
      { i: "", x: 2, y: 0, w: 0, h: 0 },
      { i: "", x: 2, y: 3, w: 0, h: 0 },
      { i: "l", x: 2, y: 3, w: 1, h: 2 },
    ]);
    setLayoutSmState([
      { i: "", x: 0, y: 0, w: 0, h: 0 },
      { i: "", x: 2, y: 0, w: 0, h: 0 },
      { i: "d", x: 3, y: 0, w: 1, h: 1.2 },
      { i: "", x: 0, y: 1, w: 0, h: 0 },
      { i: "h", x: 3, y: 3, w: 1, h: 1.2 },
      { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
      { i: "", x: 1, y: 1, w: 0, h: 0 },
      { i: "", x: 2, y: 0, w: 0, h: 0 },
      { i: "", x: 0, y: 1, w: 0, h: 0 },
      { i: "l", x: 0, y: 1, w: 1, h: 1.2 },
    ]);
  };

  const showMedia = () => {
    setLayoutState([
      { i: "a", x: 0, y: 0, w: 0, h: 0 },
      { i: "c", x: 1, y: 0, w: 0, h: 0 },
      { i: "d", x: 4, y: 1, w: 0, h: 0 },
      { i: "", x: 1, y: 0, w: 0, h: 0 },
      { i: "h", x: 0, y: 4, w: 0, h: 0 },
      { i: "e", x: 0, y: 0, w: 0, h: 0 },
      { i: "", x: 4, y: 0, w: 0, h: 0 },
      { i: "j", x: 2, y: 0, w: 0, h: 0 },
      { i: "i", x: 0, y: 0, w: 1, h: 1 },
    ]);
    setLayoutSmState([
      { i: "a", x: 0, y: 1, w: 2, h: 1.2 },
      { i: "c", x: 0, y: 1, w: 1, h: 0.6 },
      { i: "d", x: 1, y: 1, w: 1, h: 1.2 },
      { i: "g", x: 0, y: 1, w: 1, h: 0.6 },
      { i: "h", x: 1, y: 2, w: 2, h: 0.6 },
      { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
      { i: "f", x: 1, y: 1, w: 2, h: 0.6 },
      { i: "j", x: 1, y: 1, w: 1, h: 0.6 },
      { i: "i", x: 0, y: 0, w: 1, h: 0.6 },
    ]);
  };

  return (
    <LayoutContext.Provider
      value={{
        layoutState,
        layoutSmState,
        showAllGrid,
        showAbout,
        showMedia,
        showProject,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
