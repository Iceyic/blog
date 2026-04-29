import { Link } from 'react-router-dom';
import { ThreeJSPageContent } from '../technologies/ThreeJS';
import './ThreeJSPage.css';

export const ThreeJSPage: React.FC = () => {
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

      <header className="tech-header" style={{ '--tech-color': '#049ef4' } as React.CSSProperties}>
        <div className="tech-header-bg"></div>
        <div className="tech-header-content">
          <div className="tech-header-icon">📦</div>
          <h1>Three.js</h1>
          <p>基于 WebGL 的高级 3D 图形库</p>
        </div>
      </header>

      <main className="tech-content">
        <ThreeJSPageContent />
      </main>
    </div>
  );
};
