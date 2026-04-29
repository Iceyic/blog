import { Link } from 'react-router-dom';
import {
  Introduction,
  CoreConcepts,
  UsageFlow,
  WasmDemo,
  ApplicationScenarios,
  Compatibility,
  CompleteExample,
  GettingStarted,
} from '../technologies/Wasm/components';
import '../technologies/Wasm/styles/card.css';
import './WasmPage.css';

export const WasmPage: React.FC = () => {
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

      <header className="tech-header" style={{ '--tech-color': '#654ff0' } as React.CSSProperties}>
        <div className="tech-header-bg"></div>
        <div className="tech-header-content">
          <div className="tech-header-icon">&#x2699;</div>
          <h1>WebAssembly</h1>
          <p>在浏览器中实现接近原生的性能</p>
        </div>
      </header>

      <main className="tech-content">
        <section className="feature-grid-section">
          <div className="feature-grid">
            <div className="feature-item">
              <h4>高性能计算</h4>
              <p>接近原生代码的执行效率</p>
            </div>
            <div className="feature-item">
              <h4>多语言支持</h4>
              <p>C、C++、Rust、Go 均可编译</p>
            </div>
            <div className="feature-item">
              <h4>沙箱安全</h4>
              <p>安全隔离的执行环境</p>
            </div>
          </div>
        </section>

        <section className="content-wrapper">
          <Introduction />
          <CoreConcepts />
        </section>

        <UsageFlow />
        <WasmDemo />
        <ApplicationScenarios />
        <Compatibility />
        <CompleteExample />
        <GettingStarted />
      </main>
    </div>
  );
};