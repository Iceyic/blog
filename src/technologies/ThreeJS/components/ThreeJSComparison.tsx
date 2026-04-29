import React from 'react';
import '../styles/card.css';

export const ThreeJSComparison: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">技术对比：WebGL vs Three.js</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>特性</th>
            <th>WebGL</th>
            <th>Three.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>层级</strong></td>
            <td>底层 API</td>
            <td>高层抽象</td>
          </tr>
          <tr>
            <td><strong>学习曲线</strong></td>
            <td>陡峭（需掌握着色器、缓冲区等）</td>
            <td>平缓（面向对象 API）</td>
          </tr>
          <tr>
            <td><strong>代码量</strong></td>
            <td>大量样板代码</td>
            <td>简洁直观</td>
          </tr>
          <tr>
            <td><strong>控制力</strong></td>
            <td>完全掌控，可定制任何细节</td>
            <td>较高，可通过材质和事件扩展</td>
          </tr>
          <tr>
            <td><strong>适用场景</strong></td>
            <td>定制渲染引擎、性能优化</td>
            <td>快速开发 3D 应用</td>
          </tr>
          <tr>
            <td><strong>包大小</strong></td>
            <td>无（原生 API）</td>
            <td>~150KB（minified）</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
