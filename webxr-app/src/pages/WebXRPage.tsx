import { Link } from 'react-router-dom';
import {
  Introduction,
  CoreConcepts,
  UsageFlow,
  XRScene,
  ApplicationScenarios,
  Compatibility,
  CompleteExample,
  GettingStarted,
} from '../technologies/WebXR/components';
import '../technologies/WebXR/styles/card.css';
import '../technologies/WebXR/styles/feature.css';
import './WebXRPage.css';

export const WebXRPage: React.FC = () => {
  return (
    <div className="tech-page">
      <nav className="tech-nav">
        <Link to="/" className="nav-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          返回首页
        </Link>
      </nav>

      <header className="tech-header" style={{ '--tech-color': '#00d9ff' } as React.CSSProperties}>
        <div className="tech-header-bg"></div>
        <div className="tech-header-content">
          <div className="tech-header-icon">🥽</div>
          <h1>WebXR</h1>
          <p>在浏览器中构建沉浸式 VR 与 AR 体验</p>
        </div>
      </header>

      <main className="tech-content">
        <section className="feature-grid-section">
          <div className="feature-grid">
            <div className="feature-item">
              <h4>VR 虚拟现实</h4>
              <p>创建完全沉浸式的虚拟环境</p>
            </div>
            <div className="feature-item">
              <h4>AR 增强现实</h4>
              <p>将虚拟内容叠加到现实世界</p>
            </div>
            <div className="feature-item">
              <h4>跨平台支持</h4>
              <p>支持 Quest、Pico、HoloLens 等设备</p>
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
      </main>
    </div>
  );
};
