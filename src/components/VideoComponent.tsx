import { Play } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface VideoComponentProps {
  thumbnail_url: string;
  alt: string;
  video_url: string;
  resetTrigger?: boolean; // ✅ new pro
}

const VideoComponent = ({thumbnail_url, alt, video_url, resetTrigger}: VideoComponentProps) => {
  const [isVideoRunning, setIsVideoRunning] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoRunning(true);
  };
  // reset when slide changes
  useEffect(() => {
    if (resetTrigger) {
      setIsVideoRunning(false);
    }
  }, [resetTrigger]);
  return (
    <div className="w-full h-full flex items-center justify-center">
      {!isVideoRunning && (
        <>
          <Image
            src={thumbnail_url}
            alt={alt}
            fill
            className="w-full h-full object-contain rounded-lg"
          />
          <button>
            <Play
              onClick={handlePlayVideo}
              size={36}
              className="absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 cursor-pointer"
            />
          </button>
        </>
      )}
      {isVideoRunning && (
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video_url}?autoplay=1`} // replace with your video ID
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default VideoComponent