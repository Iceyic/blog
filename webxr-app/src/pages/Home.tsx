import { Link } from 'react-router-dom';
import { technologies } from '../types/technology';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Web Graphics</span>
            <br />
            Knowledge Hub
          </h1>
          <p className="hero-subtitle">
            探索浏览器图形与沉浸式技术知识库
          </p>
          <div className="hero-tags">
            <span className="tag">WebGL</span>
            <span className="tag">Three.js</span>
            <span className="tag">WebXR</span>
            <span className="tag">VR/AR</span>
          </div>
        </div>
      </header>

      <main className="home-content">
        <section className="tech-section">
          <h2 className="section-title">选择一项技术开始学习</h2>
          <div className="tech-grid">
            {technologies.map((tech) => (
              <Link key={tech.id} to={`/${tech.id}`} className="tech-card" style={{ '--tech-color': tech.color } as React.CSSProperties}>
                <div className="tech-card-inner">
                  <div className="tech-card-icon">{tech.icon}</div>
                  <div className="tech-card-content">
                    <h3 className="tech-card-name">{tech.name}</h3>
                    <p className="tech-card-desc">{tech.description}</p>
                  </div>
                  <div className="tech-card-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                <div className="tech-card-glow"></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">关于本项目</h2>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">📚</div>
              <h3>系统化知识</h3>
              <p>从基础概念到高级应用，由浅入深地掌握每项技术</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3>实践导向</h3>
              <p>每个技术都配有可交互的 Demo，边学边练</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🔗</div>
              <h3>技术关联</h3>
              <p>清晰展示各项技术之间的关系与层级</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  );
};
