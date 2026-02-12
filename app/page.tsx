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
    <main className="min-h-screen overflow-x-hidden flex items-center justify-center bg-green-200">
      <audio
        ref={audioRef}
        loop
      >
        <source src="/raindance.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-[80%] flex flex-col items-center gap-8">

        {/* Middle section: Envelope only */}
        <div className="flex items-center justify-center">
          {/* Envelope */}
          <div className="relative w-80 h-64">
            {/* Envelope back */}
            <div className= {opened ? "absolute hidden inset-0 bg-pink-200 rounded-sm shadow-2xl" : "absolute inset-0 bg-green-200 rounded-sm shadow-2xl"} />

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
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${opened ? "hidden" : "rotate-0" }`}
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
        </div>

        {/* Top row of 4 images - Hidden until opened */}
        <div
          className={`flex gap-4 transition-all duration-500 ${
            opened ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center">
            <img
              src="/images/photo1.jpg"
              alt="Memory 1"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform -rotate-3 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">You & me 👉🏻👈🏻</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/photo2.jpg"
              alt="Memory 2"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform rotate-2 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Goofy 😜</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/photo3.jpg"
              alt="Memory 3"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform -rotate-1 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Jokes 😂</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/photo4.jpg"
              alt="Memory 4"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform rotate-3 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Vibes 🥺</p>
          </div>
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
          <div className="w-full flex items-center justify-center gap-6">

            {/* Letter/Note */}
            <div className="relative sm:w-96 w-160 sm:h-250 h-290 bg-green-300">
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
                <div
              className={`flex flex-col items-center transition-all duration-500`}
            >
              <img
                src="/images/photo5.jpg"
                alt="Memory 5"
                className="w-20 h-20 object-cover rounded-lg shadow-lg transform -rotate-2 hover:scale-110 transition-transform"
              />
              <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Camera 📸</p>
            </div>
                
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive] mb-4">
                  You're special to me and the occasion is to celebrate special people. So sit back and enjoy my little note, the idea is to make you smile, I really wish you do. 
                </p>
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive]">
                  You're like semo, the thought of you makes me happy. Whenever I think of Semo, I always thank God for inspiring such a beautiful meal. I thank God for you many times.
                </p>
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive]">
                  You're like semo, the scent of you strikes the happy emotion in me, well you actually always smell nice and at one point I think I can recognise when you enter a space and I immediately start scanning the space to look for you.
                </p>
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive]">
                  Just like semo, you're the agenda I'll never stop championing. I think you know this already, I'm always ready to argue that Semo is the next best thing after fresh air. Likewise you, you're really one eccentric human, smart, honest, great values, loves God, would love to help those around him and manyyyy more.
                </p>
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive]">
                  Amongst the very many qualities of Semo, they still don't fully qualify how special you are. 
                </p>
                <p className="text-base text-gray-700 leading-relaxed max-w-sm font-['Brush_Script_MT',cursive]">
                  Cheers to you mehn for being better than semo. 
                </p>
                
                <p className="text-lg text-red-500 font-['Brush_Script_MT',cursive] mb-6">
                  To my favourite RT
                </p>
                <div
              className={`flex flex-col items-center transition-all duration-500`}
            >
              <img
                src="/images/photo9.jpg"
                alt="Memory 9"
                className="w-20 h-20 object-cover rounded-lg shadow-lg transform rotate-2 hover:scale-110 transition-transform"
              />
              <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Netherlands 🇳🇱</p>
            </div>
                <p className="text-4xl text-red-400">🤎</p>
              </div>
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
        {/* Bottom row of 4 images - Hidden until opened */}
        <div
          className={`flex gap-4 mb-8 transition-all duration-500 ${
            opened ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center">
            <img
              src="/images/photo7.jpg"
              alt="Memory 7"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform -rotate-3 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Gist 👸🏻</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/photo8.jpg"
              alt="Memory 8"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform rotate-2 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Music 🎶</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/photo6.jpg"
              alt="Memory 6"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform -rotate-2 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Annoying 🤦🏻‍♀️</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/photo10.jpg"
              alt="Memory 10"
              className="w-20 h-20 object-cover rounded-lg shadow-lg transform rotate-3 hover:scale-110 transition-transform"
            />
            <p className="text-xs text-gray-700 mt-1 text-center max-w-16">Tired 😴</p>
          </div>
        </div>
      </div>
    </main>
  );
}
