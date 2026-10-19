import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  ariaLabel?: string;
  autoPlayInView?: boolean;
  poster?: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  disablePictureInPicture?: boolean;
  onClick?: React.MouseEventHandler<HTMLVideoElement>;
}

/**
 * Video that defers downloading its source until it scrolls near the viewport,
 * then pauses when it leaves view. Keeps heavy media off the initial load.
 */
export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className,
  ariaLabel,
  autoPlayInView = true,
  poster,
  loop = true,
  muted = true,
  playsInline = true,
  disablePictureInPicture = true,
  onClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !shouldLoad) return;
    if (autoPlayInView && inView) {
      node.play().catch(() => undefined);
    } else {
      node.pause();
    }
  }, [inView, shouldLoad, autoPlayInView]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      disablePictureInPicture={disablePictureInPicture}
      preload="none"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    />
  );
};
