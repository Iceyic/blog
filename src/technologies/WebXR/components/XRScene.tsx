import React from 'react';
import * as THREE from 'three';
import { useXRSupport, useXRSession } from '../hooks';
import './XRScene.css';

export const XRScene: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = React.useRef<THREE.Mesh | null>(null);
  const frameRef = React.useRef<number>(0);

  const { immersiveVR, checking } = useXRSupport();
  const { isXRActive, enterXR, exitXR } = useXRSession();
  const [modeDisplay, setModeDisplay] = React.useState('普通模式');
  const isDraggingRef = React.useRef(false);
  const previousMouseRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00d9ff,
      metalness: 0.3,
      roughness: 0.4,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ff88, 1, 50);
    pointLight.position.set(-3, 2, 4);
    scene.add(pointLight);

    const gridHelper = new THREE.GridHelper(20, 20, 0x00d9ff, 0x333366);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (cubeRef.current && !isXRActive) {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !cubeRef.current || isXRActive) return;
      const deltaX = e.clientX - previousMouseRef.current.x;
      const deltaY = e.clientY - previousMouseRef.current.y;
      cubeRef.current.rotation.y += deltaX * 0.01;
      cubeRef.current.rotation.x += deltaY * 0.01;
      previousMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isXRActive]);

  React.useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.xr.enabled = isXRActive;
    }
  }, [isXRActive]);

  const handleEnterXR = () => {
    enterXR('immersive-vr').then((session) => {
      if (session && rendererRef.current) {
        setModeDisplay('VR 沉浸模式');
      }
    });
  };

  const handleExitXR = () => {
    exitXR();
    setModeDisplay('普通模式');
  };

  const handleReset = () => {
    if (cubeRef.current) {
      cubeRef.current.rotation.set(0, 0, 0);
      cubeRef.current.position.set(0, 0, 0);
    }
  };

  return (
    <section className="demo-section">
      <div className="demo-card">
        <div className="demo-header">
          <h3>WebXR 交互示例</h3>
          <p>点击按钮进入沉浸式 VR 体验（需要 XR 设备）。也可在普通模式下拖拽旋转场景进行预览。</p>
        </div>
        <div className="demo-content">
          <div className="canvas-container" ref={containerRef}>
            <div className="canvas-overlay">{modeDisplay}</div>
          </div>
          <div className="demo-buttons">
            <button
              className="btn btn-primary"
              onClick={isXRActive ? handleExitXR : handleEnterXR}
              disabled={checking || !immersiveVR}
            >
              {isXRActive ? '退出 XR 体验' : '进入 XR 体验'}
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              重置场景
            </button>
          </div>
          {(!immersiveVR && !checking) && (
            <div className="compatibility-note">
              当前浏览器或设备不支持 WebXR immersive-vr 会话。您仍可以在普通模式下预览 3D 场景。
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
