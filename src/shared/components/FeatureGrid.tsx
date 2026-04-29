import React from 'react';
import './FeatureGrid.css';

const features = [
  {
    title: 'VR 虚拟现实',
    description: '创建完全沉浸式的虚拟环境，用户可在三维空间中行走和交互',
  },
  {
    title: 'AR 增强现实',
    description: '将虚拟内容叠加到现实世界中，实现虚实融合的体验',
  },
  {
    title: '跨平台支持',
    description: '一次开发，多设备运行。支持 Quest、Pico、HoloLens 等主流设备',
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="feature-grid-section">
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
