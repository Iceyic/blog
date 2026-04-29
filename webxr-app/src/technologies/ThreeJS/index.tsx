import React from 'react';
import {
  ThreeJSIntroduction,
  ThreeJSConcepts,
  ThreeJSUsageFlow,
  ThreeJSDemo,
  ThreeJSScenarios,
  ThreeJSComparison,
  ThreeJSGettingStarted,
} from './components';
import './styles/card.css';

export const ThreeJSPageContent: React.FC = () => {
  return (
    <>
      <section className="feature-grid-section">
        <div className="feature-grid">
          <div className="feature-item">
            <h4>易于使用</h4>
            <p>简洁的 API，快速创建 3D 场景</p>
          </div>
          <div className="feature-item">
            <h4>功能丰富</h4>
            <p>内置几何体、材质、动画、加载器等</p>
          </div>
          <div className="feature-item">
            <h4>生态完善</h4>
            <p>活跃社区、丰富示例、完整文档</p>
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <ThreeJSIntroduction />
        <ThreeJSComparison />
      </section>

      <ThreeJSConcepts />
      <ThreeJSUsageFlow />
      <ThreeJSDemo />
      <ThreeJSScenarios />
      <ThreeJSGettingStarted />
    </>
  );
};
