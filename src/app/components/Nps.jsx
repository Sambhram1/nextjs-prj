"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { h2 } from "framer-motion/client";

export function InfiniteMovingCardsDemo() {
  return (
    <>
   
    <div className="h-[50rem] text-4xl rounded-md flex flex-col antialiased bg-white dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  items-center justify-center relative overflow-hidden p-56">
    <h2 className="font-medium text-center h-24  ">Hello! this is our music </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </>
  );
}

const testimonials = [
    {
      quote:
        "Music expresses that which cannot be put into words and that which cannot remain silent.",
      name: "Victor Hugo",
      title: "French Poet and Novelist",
    },
    {
      quote:
        "Where words fail, music speaks. It has been my solace, my companion, and my greatest form of expression.",
      name: "Hans Christian Andersen",
      title: "Author of Fairy Tales",
    },
    {
      quote:
        "Life is like a piano. What you get out of it depends on how you play it.",
      name: "Tom Lehrer",
      title: "Musician and Mathematician",
    },
    {
      quote:
        "Music is the universal language of mankind, connecting hearts and souls in ways words cannot.",
      name: "Henry Wadsworth Longfellow",
      title: "American Poet",
    },
    {
      quote:
        "The only truth is music. It transcends boundaries, breaks barriers, and speaks to the soul.",
      name: "Jack Kerouac",
      title: "Novelist and Poet",
    },
  ];
  
