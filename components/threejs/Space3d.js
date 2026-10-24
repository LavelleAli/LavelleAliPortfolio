"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import threeNebula from "./threeNebula";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Space3d = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // const controls = new OrbitControls( camera, rendererReference.domElement );
    // const loader = new GLTFLoader();

    const mount = mountRef.current;
    let stillActive = true;

    const scene = new THREE.Scene();
    const nebula = threeNebula(scene);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // The Object:
    const geometry = new THREE.SphereGeometry(0.5, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: "white", map: null });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    async function sphereTexture() {
      const loader = new THREE.TextureLoader();
      const texture = await loader.loadAsync("/equirectangularEarth2-1.jpg");

      if (!stillActive) {
        texture.dispose();
        return;
      }

      material.map = texture;
      material.needsUpdate = true;
    }
    sphereTexture();

    // camera controls:

    camera.position.z = 8;

    const mouse = {
      x: 0,
      y: 0,
    };

    let lastMoveTime = 0;

    function aimCamera(x, y) {
      mouse.x = (x / window.innerWidth) * 2 - 1;
      mouse.y = (y / window.innerHeight) * -2 + 1;
      lastMoveTime = performance.now();
    }

    function cameraMotion(e) {
      if (e.pointerType === "touch") return;
      aimCamera(e.clientX, e.clientY);
    }

    function cameraTouch(e) {
      const touch = e.touches[0];
      if (touch) aimCamera(touch.clientX, touch.clientY);
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //  Behaviour:
    function animate(time) {
      // sphere.rotation.x = time / 2000;
      sphere.rotation.y = time / 2000;
      const idle = time - lastMoveTime > 1000;
      const idleTime = (time - lastMoveTime - 1000) * 0.001;
      const startAngle = Math.atan2(mouse.y, mouse.x);
      const radius = Math.max(0.05, Math.hypot(mouse.x, mouse.y));
      const angle = startAngle + idleTime * 0.1;
      const driftX = Math.cos(angle) * radius;
      const driftY = Math.sin(angle) * radius;
      const targetX = idle ? driftX : mouse.x;
      const targetY = idle ? driftY : mouse.y;
      camera.position.x += (targetX * 8 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 8 - camera.position.y) * 0.05;

      camera.lookAt(sphere.position);

      renderer.render(scene, camera);
      nebula.update();
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener("pointermove", cameraMotion);
    window.addEventListener("touchstart", cameraTouch, { passive: true });
    window.addEventListener("touchmove", cameraTouch, { passive: true });
    window.addEventListener("resize", handleResize);

    // Clean up:
    return () => {
      stillActive = false;
      renderer.setAnimationLoop(null);
      nebula.destroy();
      renderer.dispose();
      material.map?.dispose();
      geometry.dispose();
      material.dispose();
      mount.removeChild(renderer.domElement);
      window.removeEventListener("pointermove", cameraMotion);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", cameraTouch);
      window.removeEventListener("touchmove", cameraTouch);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    ></div>
  );
};

export default Space3d;
