'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProjectCard from "../ProjectCard/projectCard";
import projects from "@/data/projects";

const ProjectSliderAuto = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <>
        <div ref={sliderRef} className="keen-slider">
            {projects.map((project,) => (
            <div
                key={project.title}
                className="keen-slider__slide flex items-center justify-center"
            >
                <div>
                <ProjectCard project={project} />
                </div>
            </div>
            ))}
        </div>
    </>
  )
};

export default ProjectSliderAuto;
