'use client';

import { useRef, useState, MouseEvent, TouchEvent } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [isSliding, setIsSliding] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isSliding) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg cursor-col-resize bg-gray-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsSliding(false)}
      onMouseDown={() => setIsSliding(true)}
      onMouseUp={() => setIsSliding(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsSliding(true)}
      onTouchEnd={() => setIsSliding(false)}
      style={{ aspectRatio: '16 / 9' }}
    >
      {/* After Image (Background) */}
      <motion.img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Foreground - Clipped) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          style={{ width: `${(100 / position) * 100}%` }}
        />
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-brand-primary cursor-col-resize"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white p-2 rounded-full shadow-lg">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold whitespace-nowrap">
            <span>←</span>
            <span>→</span>
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm font-semibold">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-2 rounded-lg text-sm font-semibold">
        {afterLabel}
      </div>
    </div>
  );
}
