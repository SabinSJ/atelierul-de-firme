"use client";

import { useState } from "react";
import ProductImageZoom from "./ProductImageZoom";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] rounded-xl bg-[#101b23] flex items-center justify-center text-[#71808b]">
        Imagine indisponibilă
      </div>
    );
  }

  const activeImage = images[selectedImageIndex] ?? images[0];
  const hasMultipleImages = images.length > 1;

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* Thumbnail-uri */}
        {hasMultipleImages && (
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[520px] pb-2 md:pb-0">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`Afișează imaginea ${index + 1}`}
                aria-pressed={selectedImageIndex === index}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-md border-2 transition-all ${
                  selectedImageIndex === index
                    ? "border-[#00c6ff] opacity-100"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${title} - imagine ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Imagine principală */}
        <div className="relative flex-1 min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#101b23] group">
          <div className="relative aspect-[4/3] md:aspect-[16/11]">
            <img
              src={activeImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="absolute bottom-4 right-4 rounded-md bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-black"
            >
              Mărește imaginea
            </button>
          </div>
        </div>
      </div>

      <ProductImageZoom
        image={activeImage}
        title={title}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
      />
    </>
  );
}
