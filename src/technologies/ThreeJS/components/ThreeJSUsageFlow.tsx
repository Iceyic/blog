import React from 'react';
import '../styles/card.css';

const basicSteps = [
  {
    title: '1. 引入 Three.js',
    code: `import * as THREE from 'three';`,
  },
  {
    title: '2. 创建场景、相机、渲染器',
    code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);`,
  },
  {
    title: '3. 创建 3D 物体',
    code: `const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0x049ef4,
  metalness: 0.3,
  roughness: 0.4,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);`,
  },
  {
    title: '4. 添加光照',
    code: `const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);`,
  },
  {
    title: '5. 添加动画循环',
    code: `function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();`,
  },
  {
    title: '6. 处理窗口大小变化',
    code: `window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
  },
];

export const ThreeJSUsageFlow: React.FC = () => {
  return (
    <div className="card threejs-usage">
      <h2 className="card-title">Three.js 基本使用流程</h2>

      {basicSteps.map((step, index) => (
        <div key={index} className="usage-step">
          <h3>{step.title}</h3>
          <div className="code-block">
            <pre>{step.code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
