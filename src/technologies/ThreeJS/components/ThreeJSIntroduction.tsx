import React from 'react';
import '../styles/card.css';

export const ThreeJSIntroduction: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">什么是 Three.js？</h2>
      <p>
        Three.js 是一个基于 WebGL 的高级 JavaScript 3D 图形库，它封装了 WebGL 的复杂底层 API，
        提供了更直观、更易用的接口来创建 3D 场景、模型、动画和交互体验。
      </p>

      <h3>核心特性</h3>
      <ul>
        <li><strong>场景简化</strong>：通过高级抽象简化 3D 场景创建流程</li>
        <li><strong>丰富的几何体</strong>：内置多种基础几何体：立方体、球体、平面等</li>
        <li><strong>材质系统</strong>：支持多种材质：基础材质、PBR 材质、自定义着色器</li>
        <li><strong>光照系统</strong>：支持多种光源：环境光、平行光、点光源、聚光灯</li>
        <li><strong>动画支持</strong>：内置动画系统和补间动画功能</li>
        <li><strong>加载器</strong>：支持加载多种 3D 格式：GLTF、OBJ、FBX 等</li>
      </ul>

      <h3>Three.js 与 WebGL 的关系</h3>
      <p>
        Three.js 并不是替代 WebGL，而是构建在 WebGL 之上的抽象层。它让开发者无需关心
        着色器编译、缓冲区管理等底层细节，专注于 3D 场景的构建。
      </p>

      <div className="highlight-box">
        <code>WebGL</code> 底层渲染引擎 → <code>Three.js</code> 高级抽象 →
        <code>WebXR</code> 沉浸式体验框架
      </div>
    </div>
  );
};
