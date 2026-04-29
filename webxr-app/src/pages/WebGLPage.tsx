import { Link } from 'react-router-dom';
import {
  WebGLIntroduction,
  WebGLConcepts,
  WebGLUsageFlow,
  WebGLDemo,
  WebGLScenarios,
  WebGLComparison,
} from '../technologies/WebGL/components';
import '../technologies/WebGL/styles/card.css';
import './WebGLPage.css';

export const WebGLPage: React.FC = () => {
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

      <header className="tech-header" style={{ '--tech-color': '#cc0000' } as React.CSSProperties}>
        <div className="tech-header-bg"></div>
        <div className="tech-header-content">
          <div className="tech-header-icon">🎨</div>
          <h1>WebGL</h1>
          <p>浏览器中的 2D/3D 图形渲染 API</p>
        </div>
      </header>

      <main className="tech-content">
        <section className="feature-grid-section">
          <div className="feature-grid">
            <div className="feature-item">
              <h4>硬件加速</h4>
              <p>直接调用 GPU 进行高性能图形渲染</p>
            </div>
            <div className="feature-item">
              <h4>跨平台</h4>
              <p>任何支持现代浏览器的设备都能运行</p>
            </div>
            <div className="feature-item">
              <h4>无插件</h4>
              <p>原生浏览器内置支持，无需安装任何插件</p>
            </div>
          </div>
        </section>

        <section className="content-wrapper">
          <WebGLIntroduction />
          <WebGLComparison />
        </section>

        <WebGLConcepts />
        <WebGLUsageFlow />
        <WebGLDemo />
        <WebGLScenarios />
      </main>
    </div>
  );
};
