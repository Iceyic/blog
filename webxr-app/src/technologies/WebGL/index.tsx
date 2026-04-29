import React from 'react';
import {
  WebGLIntroduction,
  WebGLConcepts,
  WebGLUsageFlow,
  WebGLDemo,
  WebGLScenarios,
  WebGLComparison,
} from './components';
import './styles/card.css';

export const WebGLDetail: React.FC = () => {
  return (
    <>
      <section className="feature-grid-section">
        <div className="feature-grid">
          <div className="feature-item">
            <h4>硬件加速</h4>
            <p>直接调用 GPU 进行高性能图形渲染</p>
          </div>
          <div className="feature-item">
            <h4>跨平台</h4>
            <p>任何支持现代浏览器的设备都能运行</p>
          </div>
          <div className="feature-item">
            <h4>无插件</h4>
            <p>原生浏览器内置支持，无需安装任何插件</p>
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <WebGLIntroduction />
        <WebGLComparison />
      </section>

      <WebGLConcepts />
      <WebGLUsageFlow />
      <WebGLDemo />
      <WebGLScenarios />
    </>
  );
};
