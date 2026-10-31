"use client";

import { useRef, useState } from "react";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const pages = Array.from(
  { length: 25 },
  (_, index) =>
    `/images/avn/AVN ELITE PROPERTIES - ID BOOK_page-${String(
      index + 1,
    ).padStart(4, "0")}.jpg`,
);

export default function IdBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    // <div className="flex w-full justify-center">

    <div
      ref={containerRef}
      className={`relative flex items-center justify-center bg-[#17232B] ${
        isFullscreen ? "h-screen w-screen" : "w-full"
      }`}
    >
      <button
        onClick={toggleFullscreen}
        className="absolute right-4 top-4 z-50 rounded border border-white/20 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/20"
      >
        {isFullscreen ? "Închide fullscreen ✕" : "Vezi fullscreen ↗"}
      </button>
      <HTMLFlipBook
        width={480}
        height={340}
        size="fixed"
        showCover
        autoSize={false}
        mobileScrollSupport
        drawShadow
        flippingTime={700}
        usePortrait={false}
        className="mx-auto"
        style={{}}
        startPage={0}
        startZIndex={0}
        // autoSize
        maxShadowOpacity={0.5}
        clickEventForward
        useMouseEvents
        swipeDistance={30}
        showPageCorners
        disableFlipByClick={false}
      >
        {pages.map((src, index) => (
          <div key={src} className="relative h-full w-full bg-white">
            <Image
              src={src}
              alt={`ID Book - pagina ${index + 1}`}
              fill
              sizes="(max-width: 868px) 100vw, 50vw"
              className="object-contain"
              priority={index < 2}
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
