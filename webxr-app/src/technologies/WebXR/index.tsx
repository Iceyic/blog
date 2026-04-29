import React from 'react';
import {
  Introduction,
  CoreConcepts,
  UsageFlow,
  XRScene,
  ApplicationScenarios,
  Compatibility,
  CompleteExample,
  GettingStarted,
} from './components';
import './styles/card.css';

export const WebXRDetail: React.FC = () => {
  return (
    <>
      <section className="feature-grid-section">
        <div className="feature-grid">
          <div className="feature-item">
            <h4>VR 虚拟现实</h4>
            <p>创建完全沉浸式的虚拟环境，用户可在三维空间中行走和交互</p>
          </div>
          <div className="feature-item">
            <h4>AR 增强现实</h4>
            <p>将虚拟内容叠加到现实世界中，实现虚实融合的体验</p>
          </div>
          <div className="feature-item">
            <h4>跨平台支持</h4>
            <p>一次开发，多设备运行。支持 Quest、Pico、HoloLens 等主流设备</p>
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <Introduction />
        <CoreConcepts />
      </section>

      <UsageFlow />

      <XRScene />

      <ApplicationScenarios />
      <Compatibility />
      <CompleteExample />
      <GettingStarted />
    </>
  );
};
