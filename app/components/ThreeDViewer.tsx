'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

interface ThreeDViewerProps {
  modelUrl: string;
}

const lightingPresets = {
  studio: '/images/hdri-studio.hdr',
  warm: '/images/hdri-warm.hdr',
  cool: '/images/hdri-cool.hdr'
};

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [metal, setMetal] = useState<'gold' | 'silver' | 'rose'>('gold');
  const [lighting, setLighting] = useState<'studio' | 'warm' | 'cool'>('studio');

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.4, 1.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(1.2, 1.2, 1.2);
        scene.add(model);
      },
      undefined,
      () => {
        const fallback = new THREE.Mesh(
          new THREE.TorusKnotGeometry(0.3, 0.08, 150, 32),
          new THREE.MeshStandardMaterial({ color: '#c8a66a', metalness: 1, roughness: 0.2 })
        );
        scene.add(fallback);
      }
    );

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const updateLighting = () => {
      new RGBELoader().load(lightingPresets[lighting], (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      });
    };

    updateLighting();

    const animate = () => {
      controls.update();
      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const material = child.material as THREE.MeshStandardMaterial;
            material.metalness = 1;
            material.roughness = 0.22;
            material.color = new THREE.Color(
              metal === 'gold' ? '#c8a66a' : metal === 'silver' ? '#d7d7d7' : '#d9a2a8'
            );
          }
        });
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [modelUrl, metal, lighting]);

  return (
    <div className="space-y-4">
      <div ref={containerRef} className="h-[360px] w-full rounded-3xl border border-ivory/40 bg-ivory/40" />
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setMetal('gold')}>
          Gold
        </button>
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setMetal('silver')}>
          Silver
        </button>
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setMetal('rose')}>
          Rose
        </button>
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setLighting('studio')}>
          Studio
        </button>
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setLighting('warm')}>
          Warm
        </button>
        <button className="rounded-full border border-ink/10 px-4 py-2" onClick={() => setLighting('cool')}>
          Cool
        </button>
      </div>
    </div>
  );
}
