'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MediaCardProps {
  filename: string;
  index: number;
}

export default function MediaCard({ filename, index }: MediaCardProps) {
  const isVideo = filename.endsWith('.mp4');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className="break-inside-avoid rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-red-500/50 transition-colors cursor-pointer group"
    >
      <div className="relative aspect-square">
        {isVideo ? (
          <>
            <video
              src={`/photos/${filename}`}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => {
                const video = e.currentTarget;
                video.play().then(() => {
                  setIsPlaying(true);
                }).catch(err => console.log('Play failed:', err));
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget;
                video.pause();
                video.currentTime = 0;
                setIsPlaying(false);
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const video = e.currentTarget;
                if (video.paused) {
                  video.play().then(() => {
                    setIsPlaying(true);
                  }).catch(err => console.log('Play failed:', err));
                } else {
                  video.pause();
                  setIsPlaying(false);
                }
              }}
            />
            {/* Play icon overlay when not playing */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <Image
            src={`/photos/${filename}`}
            alt={`Montana Tornatore - Training & Competition`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            unoptimized
          />
        )}
      </div>
    </div>
  );
}

