"use client";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import projects from "@/data/projects";
import ProjectCard from "../ProjectCard/projectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectSlider = () => {
  const [details, setDetails] = useState(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 0,
    // Phones: one card with a peek of the next one
    slides: {
      perView: 1.1,
      origin: "center",
      spacing: 12,
    },
    // Tablets and up: show more of the cards on each side
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1.5, origin: "center", spacing: 16 },
      },
    },
  });

  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div style={scaleStyle(idx)}>
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => instanceRef.current?.prev()}
        aria-label="Previous project"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface px-3 py-2 hover:border-skyblue"
      >
        <FontAwesomeIcon icon={faAngleLeft} style={{color: "rgb(255, 212, 59)",}} />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        aria-label="Next project"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface px-3 py-2 hover:border-skyblue"
      >
        <FontAwesomeIcon icon={faAngleRight} style={{color: "rgb(255, 212, 59)",}} />
      </button>

      {/* Phones swipe instead of using the arrow buttons */}
      <p className="md:hidden mt-4 text-center font-mono text-xs text-muted">
        Swipe to browse →
      </p>
    </div>
  );
};

export default ProjectSlider;
