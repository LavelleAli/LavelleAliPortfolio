"use client";
import { useRef, useState } from "react";

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

  async function togglePlay() {
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch (err) {
        console.error("Audio could not play", err);
      }
    }
  }

  function toggleMute() {
    audio.current.muted = !muted;
    setMuted(!muted);
  }

  // Dragging the progress bar jumps the song to that point
  function seek(e) {
    const time = Number(e.target.value);
    audio.current.currentTime = time;
    setCurrentTime(time);
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
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
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
            className="flex-1 h-1 accent-skyblue cursor-pointer"
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
