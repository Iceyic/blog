import React from 'react';
import '../styles/card.css';

const concepts = [
  {
    title: 'Scene（场景）',
    description: '所有 3D 对象的容器，类似于虚拟世界的舞台',
    code: `const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);`,
  },
  {
    title: 'Camera（相机）',
    description: '决定用户观察 3D 场景的视角，常用透视相机和正交相机',
    code: `// 透视相机 - 模拟人眼视觉
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,                                   // 近裁切面
  1000                                   // 远裁切面
);
camera.position.set(0, 0, 5);`,
  },
  {
    title: 'Renderer（渲染器）',
    description: '负责将场景绘制到 Canvas 上',
    code: `const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 渲染场景
renderer.render(scene, camera);`,
  },
  {
    title: 'Geometry（几何体）',
    description: '定义 3D 物体的形状，如立方体、球体、平面等',
    code: `// 立方体几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 球体几何体
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);

// 平面几何体
const planeGeometry = new THREE.PlaneGeometry(2, 2);`,
  },
  {
    title: 'Material（材质）',
    description: '定义物体表面的外观，如颜色、光泽度、纹理等',
    code: `// 基础材质 - 简单的纯色
const material = new THREE.MeshBasicMaterial({ color: 0x00ff88 });

// 标准材质 - 支持光照的 PBR 材质
const pbrMaterial = new THREE.MeshStandardMaterial({
  color: 0x00d9ff,
  metalness: 0.5,
  roughness: 0.5,
});`,
  },
  {
    title: 'Mesh（网格）',
    description: '将几何体和材质组合成可渲染的 3D 物体',
    code: `const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00d9ff });
const cube = new THREE.Mesh(geometry, material);

// 添加到场景
scene.add(cube);

// 物体变换
cube.position.set(1, 0, 0);
cube.rotation.set(0, Math.PI / 4, 0);
cube.scale.set(1.5, 1.5, 1.5);`,
  },
];

export const ThreeJSConcepts: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">Three.js 核心概念</h2>

      {concepts.map((concept, index) => (
        <div key={index} className="concept-item">
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
          <div className="code-block">
            <pre>{concept.code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
