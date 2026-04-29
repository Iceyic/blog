import React from 'react';
import '../styles/card.css';

export const ThreeJSGettingStarted: React.FC = () => {
  return (
    <div className="card getting-started">
      <h2 className="card-title">开始使用 Three.js</h2>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        Three.js 让 Web 3D 开发变得简单高效。无论您是创建游戏、数据可视化还是 VR 应用，
        Three.js 都能帮助您快速实现想法。
      </p>
      <p className="getting-started-install">
        安装方式：
      </p>
      <div className="code-block">
        <pre>npm install three</pre>
      </div>
      <p className="resource-links">
        更多资源：
      </p>
      <p className="resource-text">
        官方文档：threejs.org/docs<br />
        GitHub：github.com/mrdoob/three.js<br />
        示例：threejs.org/examples
      </p>
    </div>
  );
};
