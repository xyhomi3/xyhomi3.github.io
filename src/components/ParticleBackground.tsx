import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1c2826);
    container.appendChild(renderer.domElement);

    const particleCount = 3000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 700;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ size: 0.7 });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Animation "Star Wars" vers l'avant
      particleSystem.rotation.x -= 0.001;
      particleSystem.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;
