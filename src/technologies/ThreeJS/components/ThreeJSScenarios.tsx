import React from 'react';
import '../styles/card.css';

const scenarios = [
  { title: '3D 游戏', description: '构建浏览器中的 3D 游戏，如赛车游戏、冒险游戏' },
  { title: '产品展示', description: '电商平台的 3D 商品展示和交互预览' },
  { title: '数据可视化', description: '大规模数据的 3D 可视化，如社交网络、地理数据' },
  { title: '虚拟展厅', description: '博物馆、艺术展的在线虚拟参观体验' },
  { title: '建筑可视化', description: '建筑设计的 3D 预览和室内装修效果展示' },
  { title: 'WebXR 应用', description: '为 WebXR 提供 3D 渲染支持，构建 VR/AR 体验' },
];

export const ThreeJSScenarios: React.FC = () => {
  return (
    <div className="card scenarios-card">
      <h2 className="card-title">Three.js 应用场景</h2>
      <div className="feature-grid">
        {scenarios.map((scenario, index) => (
          <div key={index} className="feature-item">
            <h4>{scenario.title}</h4>
            <p>{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
