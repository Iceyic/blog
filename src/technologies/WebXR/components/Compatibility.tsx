import React from 'react';
import '../styles/card.css';

export const Compatibility: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">浏览器兼容性</h2>
      <p>WebXR 已获得主流浏览器的广泛支持：</p>
      <ul>
        <li><strong>Chrome</strong> (Android、Windows) - 完整支持</li>
        <li><strong>Firefox</strong> (Reality) - 完整支持</li>
        <li><strong>Samsung Internet</strong> - 完整支持</li>
        <li><strong>Microsoft Edge</strong> - 完整支持</li>
        <li><strong>Safari</strong> (iOS) - 部分支持（需要 polyfill）</li>
      </ul>
      <p style={{ marginTop: '1rem' }}>建议使用 WebXR Polyfill 以支持更多设备和浏览器：</p>
      <div className="code-block">
        <pre>npm install webxr-polyfill</pre>
      </div>
    </div>
  );
};
