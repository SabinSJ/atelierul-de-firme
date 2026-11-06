"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type ProjectCarouselProps = {
  images: string[];
  projectName: string;
};

export default function ProjectCarousel({
  images,
  projectName,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  if (images.length === 0) return null;

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
    setDragOffset(0);
  };

  const next = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
    setDragOffset(0);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    dragCurrentX.current = e.clientX;
    const diff = dragCurrentX.current - dragStartX.current;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (
      !isDragging ||
      dragStartX.current === null ||
      dragCurrentX.current === null
    ) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const diff = dragCurrentX.current - dragStartX.current;
    const threshold = 50;

    if (diff > threshold) {
      previous();
    } else if (diff < -threshold) {
      next();
    }

    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
    dragCurrentX.current = null;
  };

  return (
    <div className="mt-12 w-full overflow-hidden select-none">
      {/* Container micșorat: max-w-3xl în loc de max-w-5xl pentru un aspect mai compact */}
      <div
        className="relative mx-auto max-w-3xl cursor-grab active:cursor-grabbing touch-pan-y py-4 px-4 sm:px-8"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="flex items-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
            transitionProperty: isDragging ? "none" : "transform",
          }}
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={image}
                className="w-full flex-shrink-0 px-2 transition-all duration-500"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden rounded-xl border shadow-xl transition-all duration-500 ${
                    isActive
                      ? "border-white/20 scale-100 opacity-100 shadow-[0_15px_40px_rgba(0,198,255,0.12)]"
                      : "border-white/5 scale-95 opacity-35 blur-[1px]"
                  }`}
                >
                  {/* <Image
                    src={image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover bg-black opacity-20 blur-xl scale-110 pointer-events-none"
                  /> */}

                  <Image
                    src={image}
                    alt={`${projectName} — randare 3D ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    draggable={false}
                    className="pointer-events-none object-contain p-2 sm:p-3"
                    priority={isActive}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Buton Săgeată Stânga */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            aria-label="Imaginea anterioară"
            className="absolute left-0 sm:left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#080d12]/80 text-white backdrop-blur-md transition-all hover:border-[#00c6ff] hover:bg-[#00c6ff] hover:text-[#080d12] shadow-md"
          >
            <span className="text-xl leading-none">‹</span>
          </button>
        )}

        {/* Buton Săgeată Dreapta */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Imaginea următoare"
            className="absolute right-0 sm:right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#080d12]/80 text-white backdrop-blur-md transition-all hover:border-[#00c6ff] hover:bg-[#00c6ff] hover:text-[#080d12] shadow-md"
          >
            <span className="text-xl leading-none">›</span>
          </button>
        )}

        {/* Badge Contor */}
        <div className="absolute bottom-6 right-6 z-20 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md tracking-wider">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Indicatori */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center items-center gap-1.5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setDragOffset(0);
              }}
              aria-label={`Mergi la imaginea ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#00c6ff]"
                  : "w-2 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
