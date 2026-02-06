"use client";

import { useState, useEffect, useRef } from "react";

export default function ValentinePage() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (opened && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Audio autoplay might be blocked - that's okay
      });
    }
  }, [opened]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-200">
      <audio
        ref={audioRef}
        loop
      >
        <source src="/raindance.mp3" type="audio/mpeg" />
      </audio>
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-80 h-64">
          {/* Envelope back */}
          <div className="absolute inset-0 bg-[#90EE90] rounded-sm shadow-2xl" />

          {/* Letter inside */}
          <div
            className={`absolute inset-2 bg-white rounded-sm transition-all duration-500 flex items-center justify-center ${
              opened ? "translate-y-96 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <span className="text-3xl">💌</span>
          </div>

          {/* Back flap triangle */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500"
            style={{
              width: "0",
              height: "0",
              borderLeft: "160px solid transparent",
              borderRight: "160px solid transparent",
              borderTop: `128px solid ${opened ? "#fca5a5" : "#90EE90"}`,
            }}
          />

          {/* Front flap left */}
          <div
            className={`absolute bottom-0 left-0 transition-all duration-500 origin-bottom-left`}
            style={{
              width: "0",
              height: "0", 
              borderTop: `128px solid transparent`,
              transform: opened ? "rotateX(180deg) rotateZ(-45deg)" : "rotateZ(0)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Front flap right */}
          <div
            className={`absolute bottom-0 right-0 transition-all duration-500 origin-bottom-right`}
            style={{
              width: "0",
              height: "0",
              borderTop: `128px solid transparent`,
              transform: opened ? "rotateX(180deg) rotateZ(45deg)" : "rotateZ(0)",
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {!opened && (
          <button
            onClick={() => setOpened(true)}
            className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-800 transition-all duration-300 shadow-lg"
          >
            Open for you ♥
          </button>
        )}

        {opened && (
          <div className="relative w-96 h-80">
            {/* Paper background */}
            <div className="absolute inset-0 bg-yellow-50 rounded-lg shadow-2xl transform -rotate-1 border border-yellow-200" />
            
            {/* Cute handwritten note */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12 text-center">
              <div className="text-5xl mb-4">💖</div>
              
              <p className="text-sm text-gray-700 mb-2 font-['Brush_Script_MT',cursive]">
                Happy Valentine's Day
              </p>
              
              <h2 className="text-2xl font-bold text-red-600 mb-6 font-['Brush_Script_MT',cursive]">
                For You
              </h2>
              
              <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive] mb-4">
                You make my heart skip a beat every single day. Thank you for being the reason I smile. I'm so grateful to have you in my life.
              </p>
              
              <p className="text-lg text-red-500 font-['Brush_Script_MT',cursive] mb-6">
                With love,
              </p>
              
              <p className="text-4xl text-red-400">♥ ♥ ♥</p>
            </div>
          </div>
        )}

        {opened && (
          <button
            onClick={() => setOpened(false)}
            className="mt-8 px-6 py-2 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition-all duration-300 shadow-lg"
          >
            Close ✕
          </button>
        )}
      </div>
    </main>
  );
}
