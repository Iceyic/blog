import React from 'react';
import '../styles/card.css';

const exampleCode = `import * as THREE from 'three';

// 初始化 Three.js 场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// 创建立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00d9ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 检查 WebXR 支持并进入沉浸式会话
async function enterXR() {
  if (!navigator.xr) {
    console.log('WebXR 不可用');
    return;
  }

  const supported = await navigator.xr.isSessionSupported('immersive-vr');
  if (!supported) {
    console.log('不支持沉浸式 VR');
    return;
  }

  renderer.xr.enabled = true;

  const session = await navigator.xr.requestSession('immersive-vr', {
    requiredFeatures: ['local-floor']
  });

  renderer.xr.setSession(session);
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();`;

export const CompleteExample: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">完整示例：Three.js + WebXR</h2>
      <p>以下是一个使用 Three.js 和 WebXR API 的完整示例代码：</p>
      <div className="code-block">
        <pre>{exampleCode}</pre>
      </div>
    </div>
  );
};
