"use client";

import { useRef } from "react";

const BOOK_URL = "https://online.fliphtml5.com/kbsms/yxww/";

type Props = {
  startPage?: number;
};

export default function IdBookEmbed({ startPage = 1 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    const el = wrapperRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="relative w-full aspect-[2.6/1] overflow-hidden bg-black">
        <iframe
          title="ID Book interactiv"
          src="https://online.fliphtml5.com/kbsms/yxww/"
          className="absolute left-1/2 top-1/2 aspect-[16/9] w-full -translate-x-1/2 -translate-y-1/2 scale-[1.25] border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs tracking-wider">
        <button
          type="button"
          onClick={toggleFullscreen}
          className="transition-colors hover:text-[#00c6ff]"
        >
          TOT ECRANUL ⛶
        </button>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#00c6ff]"
        >
          DESCHIDE ÎN TAB NOU ↗
        </a>
      </div>
    </div>
  );
}
