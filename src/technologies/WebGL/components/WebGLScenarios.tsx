import React from 'react';
import '../styles/card.css';

const webglScenarios = [
  { title: '3D 游戏', description: '在浏览器中运行高品质的 3D 游戏' },
  { title: '数据可视化', description: '大规模数据集的 3D 可视化和交互' },
  { title: 'CAD 应用', description: '建筑、机械设计的浏览器端预览' },
  { title: '虚拟现实', description: 'WebGL 是 WebXR 的底层渲染技术' },
  { title: '图像处理', description: 'GPU 加速的图像滤镜和变换' },
  { title: '科学模拟', description: '物理、化学、生物过程的实时模拟' },
];

export const WebGLScenarios: React.FC = () => {
  return (
    <div className="card scenarios-card">
      <h2 className="card-title">WebGL 应用场景</h2>
      <div className="feature-grid">
        {webglScenarios.map((scenario, index) => (
          <div key={index} className="feature-item">
            <h4>{scenario.title}</h4>
            <p>{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
