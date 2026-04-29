import React from 'react';
import {
  Introduction,
  CoreConcepts,
  UsageFlow,
  WasmDemo,
  ApplicationScenarios,
  Compatibility,
  CompleteExample,
  GettingStarted,
} from './components';
import './styles/card.css';

export const WasmDetail: React.FC = () => {
  return (
    <>
      <section className="feature-grid-section">
        <div className="feature-grid">
          <div className="feature-item">
            <h4>高性能计算</h4>
            <p>接近原生代码的执行效率，适合计算密集型应用</p>
          </div>
          <div className="feature-item">
            <h4>多语言支持</h4>
            <p>C、C++、Rust、Go 等语言均可编译到 WebAssembly</p>
          </div>
          <div className="feature-item">
            <h4>沙箱安全</h4>
            <p>在安全隔离环境中执行，防止恶意代码</p>
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <Introduction />
        <CoreConcepts />
      </section>

      <UsageFlow />

      <WasmDemo />

      <ApplicationScenarios />
      <Compatibility />
      <CompleteExample />
      <GettingStarted />
    </>
  );
};