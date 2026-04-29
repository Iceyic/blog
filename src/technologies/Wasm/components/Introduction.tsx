import React from 'react';
import '../styles/card.css';

export const Introduction: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">什么是 WebAssembly？</h2>
      <p>
        WebAssembly（简称 Wasm）是一种低级字节码格式，设计用于在浏览器和服务器环境中高效执行。
        它提供了一种方式来以接近原生的性能运行代码，支持多种编程语言编译到 Web 平台。
      </p>

      <h3>核心能力</h3>
      <ul>
        <li><strong>高性能</strong>：接近原生代码的执行效率，适合计算密集型任务</li>
        <li><strong>多语言支持</strong>：支持 C、C++、Rust、Go 等语言编译到 Wasm</li>
        <li><strong>沙箱安全</strong>：在安全隔离环境中执行，防止恶意代码访问系统资源</li>
        <li><strong>可移植性</strong>：一次编译，到处运行，无需修改代码</li>
      </ul>

      <h3>应用场景</h3>
      <div className="session-type">
        <div className="session-type-item">
          <strong>游戏引擎</strong>
          <span>Unity、Unreal 等游戏引擎可编译为 Wasm 直接在浏览器运行</span>
        </div>
        <div className="session-type-item">
          <strong>图像处理</strong>
          <span>Photoshop、CAD 等重型应用可在浏览器中运行</span>
        </div>
        <div className="session-type-item">
          <strong>视频编解码</strong>
          <span>高效的音视频处理，满足实时通信需求</span>
        </div>
      </div>
    </div>
  );
};