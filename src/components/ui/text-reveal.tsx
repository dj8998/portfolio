"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const words = text.split(" ");

  return (
    <div className={cn("relative z-0", className)}>
      <div className={"mx-auto flex max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"}>
        <p
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={
                "relative mx-1 lg:mx-2.5 transition-colors duration-200 cursor-pointer hover:text-black hover:dark:text-white"
              }
            >
              <span className={"absolute opacity-30 select-none pointer-events-none"}>{word}</span>
              <span className={"relative z-10"}>{word}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export { TextRevealByWord }; 