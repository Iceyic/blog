import React from 'react';
import '../styles/card.css';

export const Introduction: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">什么是 WebXR？</h2>
      <p>
        WebXR Device API 是 W3C 制定的 Web 标准，旨在让开发者能够在浏览器中创建沉浸式虚拟现实（VR）和增强现实（AR）体验。
      </p>

      <h3>核心能力</h3>
      <ul>
        <li><strong>设备访问</strong>：直接连接 XR 头显、控制器和传感器</li>
        <li><strong>渲染优化</strong>：针对 XR 设备的帧率要求优化渲染管线</li>
        <li><strong>空间追踪</strong>：获取用户位置、头部旋转和手柄输入</li>
        <li><strong>输入管理</strong>：统一处理各种 XR 输入设备</li>
      </ul>

      <h3>会话类型</h3>
      <div className="session-type">
        <div className="session-type-item">
          <strong>immersive-vr</strong>
          <span>完全沉浸式虚拟现实体验</span>
        </div>
        <div className="session-type-item">
          <strong>immersive-ar</strong>
          <span>增强现实，将虚拟内容叠加到现实世界</span>
        </div>
        <div className="session-type-item">
          <strong>inline</strong>
          <span>非沉浸式内联展示，可在普通页面中渲染</span>
        </div>
      </div>
    </div>
  );
};
