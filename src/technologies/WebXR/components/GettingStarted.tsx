import React from 'react';
import '../styles/card.css';

export const GettingStarted: React.FC = () => {
  return (
    <div className="card getting-started">
      <h2 className="card-title">开始使用 WebXR</h2>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        WebXR 为 Web 开发者打开了沉浸式计算的大门。无论您是创建 VR 游戏、AR 应用还是数据可视化，
        WebXR 都提供了标准化的 API 来访问下一代计算平台。
      </p>
      <p className="resource-links">
        更多资源：
      </p>
      <p className="resource-text">
        官方文档：immersive-web.github.io/webxr<br />
        示例代码：github.com/immersive-web/webxr-samples
      </p>
    </div>
  );
};
