import React from 'react';
import './Architecture.css';

export const Architecture: React.FC = () => {
  return (
    <div className="architecture">
      <h2 className="architecture-title">技术架构图</h2>
      <div className="architecture-container">
        <div className="architecture-layer browser-layer">
          <div className="layer-label">浏览器</div>
          <div className="layer-content">
            <div className="arch-box html">HTML Canvas</div>
            <div className="arch-box webgl">WebGL API</div>
            <div className="arch-box webxr-layer">WebXR Device API</div>
          </div>
        </div>

        <div className="architecture-connector">
          <div className="connector-line"></div>
          <div className="connector-arrow">GPU</div>
        </div>

        <div className="architecture-layer hardware-layer">
          <div className="layer-label">GPU 硬件</div>
          <div className="layer-content">
            <div className="arch-box gpu">
              <span>顶点着色器</span>
              <span>片元着色器</span>
              <span>光栅化单元</span>
            </div>
          </div>
        </div>

        <div className="architecture-libraries">
          <div className="lib-item threejs">Three.js</div>
          <div className="lib-item babylon">Babylon.js</div>
          <div className="lib-item aframe">A-Frame</div>
          <div className="lib-item playcanvas">PlayCanvas</div>
        </div>

        <div className="architecture-applications">
          <div className="app-item">3D 游戏</div>
          <div className="app-item">数据可视化</div>
          <div className="app-item">虚拟展厅</div>
          <div className="app-item">AR/VR 体验</div>
        </div>
      </div>
    </div>
  );
};
