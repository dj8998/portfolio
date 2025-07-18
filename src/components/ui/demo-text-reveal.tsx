"use client";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function TextRevealDemo() {
  return (
    <div className="min-h-[200vh] w-full relative">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div
            className={cn(
              "w-full h-[500px] flex items-center justify-center pointer-events-auto"
            )}
          >
            <TextRevealByWord text="Magic UI will change the way you design." />
          </div>
        </div>
      </div>
      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
} 