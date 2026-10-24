"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const FADE = 0.6; 
const END_FADE = 10;

// Turns seconds into m:ss, e.g. 75 -> "1:15"
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const AudioPlayer = ({ src, title, artist, loop = false, className = "" }) => {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const lastTime = useRef(0);


  useEffect(() => {
    if (audio.current.readyState >= 1) setDuration(audio.current.duration);
  }, []);

  async function togglePlay() {
    const el = audio.current;

    gsap.killTweensOf(el);

    if (playing) {
      setPlaying(false);
      gsap.to(el, {
        volume: 0,
        duration: FADE,
        ease: "power1.out",
        onComplete: () => el.pause(),
      });
    } else {
      try {
        el.volume = 0;
        await el.play();
        setPlaying(true);
        gsap.to(el, { volume: 1, duration: FADE, ease: "power1.in" });
      } catch (err) {
        console.error("Audio could not play", err);
      }
    }
  }

  function toggleMute() {
    audio.current.muted = !muted;
    setMuted(!muted);
  }


  function seek(e) {
    const time = Number(e.target.value);
    audio.current.currentTime = time;
    setCurrentTime(time);
    if (playing && !gsap.isTweening(audio.current)) audio.current.volume = 1;
  }

  return (
    <div
      className={`flex items-center gap-4 bg-surface border border-line rounded-xl p-4 shadow-[0_0_10px] shadow-sky-300/20 ${className}`}
    >
      <audio
        ref={audio}
        src={src}
        loop={loop}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          setCurrentTime(el.currentTime);

          // Time jumped backwards (song looped or was dragged back): fade back in
          if (el.currentTime < lastTime.current && !gsap.isTweening(el)) {
            gsap.to(el, { volume: 1, duration: FADE, ease: "power1.in" });
          }
          lastTime.current = el.currentTime;

          // Fade out over the last few seconds
          const remaining = el.duration - el.currentTime;
          if (remaining < END_FADE && !gsap.isTweening(el)) {
            el.volume = Math.max(remaining / END_FADE, 0);
          }
        }}
        onEnded={() => setPlaying(false)}
      />

      {/* Play / pause */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Play"}
        className="shrink-0 w-12 h-12 rounded-full bg-sun text-ink flex items-center justify-center hover:bg-snow hover:scale-105 transition-[background-color,scale] duration-200"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        {/* Title and artist */}
        <div className="flex items-baseline justify-between gap-2">
          <p className="truncate font-semibold text-snow">{title}</p>
          {playing && <span className="font-mono text-xs text-sun animate-pulse">playing</span>}
        </div>
        {artist && <p className="truncate text-xs text-muted">{artist}</p>}

        {/* Progress bar and times */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-mono text-xs text-muted w-9">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={seek}
            aria-label="Seek"
            className="flex-1 min-w-0 h-1 accent-skyblue cursor-pointer"
          />
          <span className="font-mono text-xs text-muted w-9 text-right">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Mute */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="shrink-0 text-muted hover:text-skyblue transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {muted ? (
            <path d="m22 9-6 6M16 9l6 6" />
          ) : (
            <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default AudioPlayer;
