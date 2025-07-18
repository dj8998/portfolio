"use client";
import { useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/demo";
import { NavBarDemo } from "@/components/ui/demo-navbar";
import Stack from "@/components/ui/Stack";
import SplitText from "@/components/ui/SplitText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { UnderlineDemo } from "@/components/ui/demo-underline";
import FlowingMenu from "@/components/ui/FlowingMenu";

const images = [
  { id: 1, img: "/images/card1.png" },
  { id: 2, img: "/images/card2.png" },
  { id: 3, img: "/images/card3.png" },
  { id: 4, img: "/images/card4.png" },
];

const heroText = "Hey, I'm Dinesh Jangid. I'm driven by the challenge of untangling complex problems and building things to solve them. This site is where I share my work, experiments, and what I'm learning along the way";

const demoItems = [
  {
    link: '#',
    text: 'Product Management',
    marqueeTexts: [
      'Strategy & Roadmapping',
      'Agile/Scrum',
      'User Research',
      'A/B Testing',
      'BRD Creation'
    ]
  },
  {
    link: '#',
    text: 'Analytics & Data',
    marqueeTexts: [
      'Adobe Analytics',
      'Google Analytics',
      'Salesforce',
      'SQL',
      'Performance Monitoring'
    ]
  },
  {
    link: '#',
    text: 'Design & AI Tools',
    marqueeTexts: [
      'Figma',
      'Cursor',
      'AI-Assisted Development',
      'Rapid Prototyping'
    ]
  },
  {
    link: '#',
    text: 'Technical Skills',
    marqueeTexts: [
      'JavaScript',
      'NodeJS',
      'React.JS',
      'APIs',
      'Version Control (Git)'
    ]
  }
];

export default function Home() {
  const [showEcoModal, setShowEcoModal] = useState(false);
  return (
    <>
      <div id="top"></div>
      <BackgroundBeamsWithCollisionDemo />
      <div className="flex flex-col items-center justify-center min-h-screen py-24 px-4 sm:px-8">
        <div className="flex flex-col items-center gap-8">
          <Stack
            randomRotation={true}
            sensitivity={80}
            sendToBackOnClick={true}
            cardDimensions={{ width: 300, height: 300 }}
            cardsData={images}
          />
          <SplitText
            text={heroText}
            className="text-3xl font-extrabold font-cartoon text-center max-w-2xl mb-8"
            delay={3}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </div>

      {/* Projects Section - now below the hero section */}
      <section id="projects" className="relative z-10 flex flex-col items-start justify-center w-full pt-8 pb-16 bg-transparent max-w-[90vw] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-cartoon text-left mb-2">My Projects</h2>
        <p className="text-lg md:text-2xl text-left w-full mb-10 text-black font-semibold">
          I love to create things, and I&apos;m always working on something new! You can view some of my favorite projects below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          <a href="https://qualfirst.co.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(225, 229, 255, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Qualfirst</div>
              <div className="text-white/80">Building a Bridge to Global Markets</div>
            </SpotlightCard>
          </a>
          <a href="https://polji.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(255, 0, 128, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Polji</div>
              <div className="text-white/80">Premium website for a jodhpur based manufacturer</div>
            </SpotlightCard>
          </a>
          <a href="https://www.simplysoy.co.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(255, 255, 0, 0.2)">
              <div className="text-white font-bold text-xl mb-2">SimplySoy</div>
              <div className="text-white/80">A Weekend Build for a Friend</div>
            </SpotlightCard>
          </a>
          <a href="#" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(0, 255, 128, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Millet Beverage Co.</div>
              <div className="text-white/80">Launching a Beverage Brand Online</div>
            </SpotlightCard>
          </a>
          <a href="https://cards.kotak.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(255, 128, 0, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Kotak Cards Journey</div>
              <div className="text-white/80">Product Manager (Fintech Product)</div>
            </SpotlightCard>
          </a>
          <a href="https://lifeeasy.hdfclife.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(128, 0, 255, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Medieasy HDFC</div>
              <div className="text-white/80">Product Manager (Insuretech)</div>
            </SpotlightCard>
          </a>
          <a href="http://craftographers.in/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(0, 128, 255, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Craftographers</div>
              <div className="text-white/80">An Experiment in D2C Craft</div>
            </SpotlightCard>
          </a>
          <a href="https://drive.google.com/file/d/1bh4u5OW9FfMtaV8u-RvW1Oa4GCsBnb3O/view" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(255, 0, 64, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Invention Factory</div>
              <div className="text-white/80">From Idea to Patent in 6 Weeks</div>
            </SpotlightCard>
          </a>
          <a href="https://dasmicrobotlab.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.2)">
              <div className="text-white font-bold text-xl mb-2">University of Delaware</div>
              <div className="text-white/80">My First Full-Stack App</div>
            </SpotlightCard>
          </a>
          <a href="#" className="cursor-pointer" onClick={e => { e.preventDefault(); setShowEcoModal(true); }}>
            <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.2)">
              <div className="text-white font-bold text-xl mb-2">Eco-Life App</div>
              <div className="text-white/80">A Side Project for Social Good</div>
            </SpotlightCard>
          </a>
        </div>
        {showEcoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-black"
                onClick={() => setShowEcoModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2 text-black">This project is retired!</h3>
              <p className="text-black mb-4">Unfortunately, this project is no longer available. Don't worry, it may come back some day. In the meantime, why not check out some of my other projects?</p>
              <button
                className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                onClick={() => setShowEcoModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Timeline Section - now above work experience */}
      <section id="timeline" className="relative z-10 w-full bg-transparent max-w-[90vw] mx-auto px-4 mb-8 scroll-mt-20">
        <TimelineDemo />
      </section>

      {/* Work Experience Section - now below timeline */}
      <section id="resume" className="relative z-10 flex flex-col items-start justify-center w-full pt-8 pb-32 bg-transparent max-w-[90vw] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-cartoon text-left mb-2">My Work Experience</h2>
        <p className="text-lg md:text-2xl text-left w-full mb-10 text-black font-semibold">
          Here&apos;s a quick look at my experience. Scroll to see more!
        </p>
        <div className="w-full max-w-[90vw] mx-auto h-auto min-h-[28rem] sm:h-[22rem] sm:min-h-0 overflow-y-auto">
          <ScrollStack
            itemDistance={100}
            itemScale={0.03}
            itemStackDistance={32}
            stackPosition="0"
            scaleEndPosition="0%"
            baseScale={1}
            scaleDuration={0.5}
            rotationAmount={0}
            blurAmount={0}
          >
            <ScrollStackItem itemClassName="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl p-6">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-t-xl mb-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <span className="font-bold text-lg text-indigo-600 dark:text-cyan-400">Product Manager, Kotak Mahindra Bank (Credit Cards)</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">Mumbai</span>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">May 2023 – Dec 2024</div>
                <ul className="list-disc pl-5 space-y-1 text-black dark:text-white/80">
                  <li>Pioneered the launch of a new credit card onboarding journey on Salesforce, authoring the BRD, technical architecture, and process notes in 3 months.</li>
                  <li>Reduced critical error instances in the customer journey from 20% to 6% by implementing Adobe Analytics dashboards for monitoring and targeted bug fixes.</li>
                  <li>Enhanced KYC efficiency from 30% to 70% by digitalizing the biometric KYC process and optimizing the VKYC journey to just 3 screens.</li>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <li>Increased application flow-through rate by 20% by conducting primary research and user interviews to identify and resolve critical bugs.</li>
                </ul>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl p-6">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-t-xl mb-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <span className="font-bold text-lg text-indigo-600 dark:text-cyan-400">Associate Product Manager, HDFC Life Digital Labs</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">Mumbai</span>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Mar 2022 - May 2023</div>
                <ul className="list-disc pl-5 space-y-1 text-black dark:text-white/80">
                  <li>Took full product ownership of the Assisted journey for Term Plans, increasing the conversion rate from 6% to 45% through deep analysis and iterative improvements.</li>
                  <li>Scaled direct channel sales by 30% by identifying new customer niches and building effective incentive models.</li>
                  <li>Spearheaded the end-to-end product development process, from requirement gathering and creating BRDs to managing the product roadmap and ensuring timely delivery.</li>
                </ul>
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl p-6">
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-t-xl mb-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <span className="font-bold text-lg text-indigo-600 dark:text-cyan-400">Graduate Engineering Trainee, HDFC Life Digital Labs</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">Mumbai</span>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Jul 2021 – Feb 2022</div>
                <ul className="list-disc pl-5 space-y-1 text-black dark:text-white/80">
                  <li>Served as a NodeJS developer for 4+ customer-facing products, contributing to the digitization of insurance and loan journeys.</li>
                  <li>Achieved a 60% YoY increase in rider sales by developing and running automated SMS/Email marketing campaigns.</li>
                </ul>
              </div>
            </ScrollStackItem>

          </ScrollStack>
        </div>
      </section>

      {/* FlowingMenu Skills Section */}
      <section className="w-full pb-4">
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
      </section>
      {/* Removed <ContactSection /> as per request */}
      <div className="select-none">
        <NavBarDemo />
      </div>
      <UnderlineDemo />
    </>
  );
}
