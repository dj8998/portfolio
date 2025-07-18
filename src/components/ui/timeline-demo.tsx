import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Embracing the Founder's Mindset</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Building my own ventures, from a B2B export platform to creative web projects. Currently designing a new furniture collection and seeking my next product challenge.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Took the Leap into Entrepreneurship</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Left my corporate PM role to build my own ideas from scratch, diving headfirst into the world of startups and product creation.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Leveled Up in Fintech at Kotak Bank</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Joined as a Product Manager, taking ownership of the credit card onboarding journey and driving significant improvements in KYC efficiency and error reduction.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Transitioned from Code to Customer</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Made the official move from a NodeJS developer to an Associate Product Manager at HDFC Life, realizing my passion was in shaping the 'why' behind the product.
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Graduated from IIT Bombay & Entered the Arena</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Earned my B.Tech in Chemical Engineering and immediately joined HDFC Life as a Graduate Engineering Trainee, building customer-facing products as a developer.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Invented, Prototyped, and Patented</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Was selected for the intensive 'Invention Factory' program, where I developed a novel hardware device and successfully filed a provisional patent for it.
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <h4 className="font-semibold mb-1">Began My Engineering Journey at IIT Bombay</h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Secured a spot at one of India's premier engineering institutes, laying the foundation for my problem-solving and analytical skills.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full max-w-[90vw] mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold font-cartoon text-left mb-2 text-black dark:text-white max-w-4xl">
        A Timeline of My Journey
      </h2>
      <p className="text-lg md:text-2xl text-left w-full mb-10 text-black font-semibold max-w-2xl">
        From engineering principles to product-led growth, here's a look at my path.
      </p>
      <div className="h-[32rem] overflow-y-auto rounded-xl bg-transparent">
        <Timeline data={data} />
      </div>
    </div>
  );
} 