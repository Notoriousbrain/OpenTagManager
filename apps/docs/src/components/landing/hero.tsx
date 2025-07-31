import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="70"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="text-xl font-semibold">OpenTagManager</div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className=" hover:text-gray-300 transition-colors"
          >
            Roadmap
          </Link>
          <Link href="https://github.com/Notoriousbrain/OpenTagManager" className="hover:text-gray-300 transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Open Source
              <br />
              Tag Management
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
              A privacy-first, developer-friendly alternative to Google Tag
              Manager. Own your data, control your tags.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-gray-800 text-white placeholder:text-gray-500 focus:border-gray-600"
              />
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 px-6"
              >
                Join Waitlist
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Get notified when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
