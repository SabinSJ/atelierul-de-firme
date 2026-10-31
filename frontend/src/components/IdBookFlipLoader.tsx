"use client";

import dynamic from "next/dynamic";

const IdBookFlip = dynamic(() => import("@/components/IdBookFlip"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[450/640] w-full max-w-[420px] animate-pulse bg-white/5" />
  ),
});

export default IdBookFlip;
