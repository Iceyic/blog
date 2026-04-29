import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import './ThreeJSDemo.css';

export const ThreeJSDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);
  const animationRef = useRef<number>(0);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1117);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const colors = [0x049ef4, 0x00ff88, 0xff6b6b, 0xffd93d, 0x6c5ce7, 0xfd79a8];

    cubesRef.current = [];
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const material = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        metalness: 0.3,
        roughness: 0.4,
      });
      const cube = new THREE.Mesh(geometry, material);

      const angle = (i / 12) * Math.PI * 2;
      const radius = 3;
      cube.position.x = Math.cos(angle) * radius;
      cube.position.z = Math.sin(angle) * radius;
      cube.position.y = (Math.random() - 0.5) * 2;

      cube.castShadow = true;
      cube.receiveShadow = true;
      scene.add(cube);
      cubesRef.current.push(cube);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x049ef4, 0.5, 20);
    pointLight.position.set(-5, 3, 0);
    scene.add(pointLight);

    const gridHelper = new THREE.GridHelper(20, 20, 0x30363d, 0x21262d);
    gridHelper.position.y = -3;
    scene.add(gridHelper);

    function animate() {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      cubesRef.current.forEach((cube, i) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.015;

        if (!isHovering) {
          cube.position.y = Math.sin(time + i * 0.5) * 0.5;
        }
      });

      if (cameraRef.current && !isHovering) {
        const radius = 8;
        cameraRef.current.position.x = Math.cos(time * 0.3) * radius;
        cameraRef.current.position.z = Math.sin(time * 0.3) * radius;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    }

    function handleResize() {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isHovering]);

  return (
    <section className="demo-section">
      <div className="demo-card">
        <div className="demo-header">
          <h3>Three.js 3D 场景</h3>
          <p>使用 Three.js 创建的彩色旋转方块群，自动环绕旋转，鼠标悬停暂停</p>
        </div>
        <div className="demo-content">
          <div
            className="threejs-canvas-container"
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="canvas-overlay">
              {isHovering ? '鼠标悬停中...' : 'Three.js 渲染'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
