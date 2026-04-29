import React from 'react';
import '../styles/card.css';

export const WebGLComparison: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">技术对比：WebGL vs Three.js vs WebXR</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>特性</th>
            <th>WebGL</th>
            <th>Three.js</th>
            <th>WebXR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>层级</strong></td>
            <td>底层 API</td>
            <td>高层抽象</td>
            <td>沉浸式框架</td>
          </tr>
          <tr>
            <td><strong>学习曲线</strong></td>
            <td>陡峭</td>
            <td>中等</td>
            <td>中等</td>
          </tr>
          <tr>
            <td><strong>控制力</strong></td>
            <td>完全掌控</td>
            <td>较高</td>
            <td>特定领域</td>
          </tr>
          <tr>
            <td><strong>典型用途</strong></td>
            <td>定制渲染引擎</td>
            <td>3D 场景、游戏</td>
            <td>VR/AR 体验</td>
          </tr>
          <tr>
            <td><strong>依赖</strong></td>
            <td>无</td>
            <td>依赖 WebGL</td>
            <td>依赖 WebGL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
