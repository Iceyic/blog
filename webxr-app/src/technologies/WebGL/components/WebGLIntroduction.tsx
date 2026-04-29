import React from 'react';
import '../styles/card.css';

export const WebGLIntroduction: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">什么是 WebGL？</h2>
      <p>
        WebGL（Web Graphics Library）是一种 JavaScript API，用于在浏览器中渲染 2D 图形和 3D 图形，
        无需使用任何插件。它基于 OpenGL ES 规范，为 Web 开发者提供了直接访问 GPU 硬件加速的能力。
      </p>

      <h3>核心特性</h3>
      <ul>
        <li><strong>硬件加速渲染</strong>：直接调用 GPU 进行高性能图形渲染</li>
        <li><strong>跨平台运行</strong>：任何支持现代浏览器的设备都能运行</li>
        <li><strong>无插件要求</strong>：原生浏览器内置支持</li>
        <li><strong>与 HTML 集成</strong>：可以在任何 HTML 元素上绘制</li>
      </ul>

      <h3>WebGL 与 WebXR 的关系</h3>
      <p>
        WebXR 使用 WebGL 作为其底层渲染技术。当您创建一个 XR 会话时，系统会提供一个 WebGL 上下文，
        用于渲染 XR 设备的左右眼视图。Three.js 等 3D 库都是构建在 WebGL 之上的抽象层。
      </p>

      <div className="highlight-box">
        <code>WebGL</code> 是底层渲染引擎 → <code>Three.js</code> 是高级抽象 →
        <code>WebXR</code> 是沉浸式体验框架
      </div>
    </div>
  );
};
