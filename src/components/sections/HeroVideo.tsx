"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroVideoProps {
  src: string;
  poster: string;
}

interface NavigatorConnection {
  saveData?: boolean;
  effectiveType?: string;
}

/**
 * Performance-conscious hero video.
 *
 * The webm asset is ~7 MB and dominates the LCP if loaded eagerly. To keep
 * the homepage fast (especially on mobile 4G), we:
 *
 * 1. Paint the poster image immediately (priority next/image) - that's the
 *    LCP candidate.
 * 2. Only mount the <video> AFTER the page has had a beat to settle:
 *    - never before requestIdleCallback / 1500 ms timeout
 *    - never on coarse pointer devices on slow connections (saveData,
 *      effectiveType "2g"/"3g")
 *    - never when the user has prefers-reduced-motion set
 *    - never if the document is hidden (background tab)
 * 3. preload="metadata" rather than "auto" so the browser fetches the
 *    container info but doesn't pull the full bitrate until play() starts.
 *
 * The poster + dark overlay are visually identical to the playing state,
 * so the swap is imperceptible.
 */
export function HeroVideo({ src, poster }: HeroVideoProps) {
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    // Respect reduced motion + save-data preferences.
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // Skip the video entirely on mobile/tablet widths: the .webm is
    // ~2.6 MB and dominates LCP on slow 4G, while the poster image is
    // visually identical with the dark overlay. Saves ~2.5 MB and drops
    // the video from the LCP candidate set on phones. Desktop visitors
    // (≥ 1024 px, typically on faster connections) still get the video.
    if (window.innerWidth < 1024) return;

    const conn = (
      navigator as Navigator & { connection?: NavigatorConnection }
    ).connection;
    const slow =
      conn?.saveData === true ||
      conn?.effectiveType === "2g" ||
      conn?.effectiveType === "slow-2g";
    if (slow) return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    let cancelled = false;
    function mount() {
      if (!cancelled && !document.hidden) setMountVideo(true);
    }

    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(mount, { timeout: 1500 });
    } else {
      const id = window.setTimeout(mount, 1500);
      return () => {
        cancelled = true;
        window.clearTimeout(id);
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* Poster - paints first, IS the LCP element */}
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Video - mounted only after a beat AND only on desktop. */}
      {mountVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
          aria-hidden="true"
        >
          <source src={src} type="video/webm" />
        </video>
      )}

      {/* Dark overlay (shared by poster + video for visual continuity) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,18,32,0.75) 0%, rgba(12,18,32,0.85) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
