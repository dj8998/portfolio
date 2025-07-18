"use client"

import Link from "next/link"
import { CenterUnderline, ComesInGoesOutUnderline, GoesOutComesInUnderline } from "@/components/ui/underline-animation"

function UnderlineDemo() {
  return (
    <div className="w-full bg-black z-50 relative">
      <div className="max-w-[90vw] mx-auto px-4">
        <div className="w-full border-t-8 border-black mb-4" />
        <div className="w-full flex flex-col items-end justify-center">
          <div className="flex flex-row font-cartoon items-end text-[#0015ff] h-full py-8 uppercase space-x-8 text-sm sm:text-xl md:text-2xl lg:text-3xl text-neutral-100">
            <div className="text-right"></div>
            <ul className="flex flex-col space-y-1 h-full items-end text-right">
              <Link href="https://www.linkedin.com/in/dj8998/" target="_blank" rel="noopener noreferrer">
                <CenterUnderline label="LINKEDIN" />
              </Link>
              <Link href="https://www.instagram.com/dinesh.vt" target="_blank" rel="noopener noreferrer">
                <ComesInGoesOutUnderline label="INSTAGRAM" direction="right" />
              </Link>
              <Link href="https://github.com/dj8998" target="_blank" rel="noopener noreferrer">
                <ComesInGoesOutUnderline label="Github" direction="left" />
              </Link>
              <div className="pt-6 w-full flex flex-col items-end">
                <ul className="flex flex-col space-y-1 h-full items-end text-right">
                  <Link href="#">
                    <GoesOutComesInUnderline
                      label="dineshmjangid01@gmail.com"
                      direction="left"
                    />
                  </Link>
                  <Link href="#">
                    <GoesOutComesInUnderline
                      label="dj8998@gmail.com"
                      direction="right"
                    />
                  </Link>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export { UnderlineDemo } 