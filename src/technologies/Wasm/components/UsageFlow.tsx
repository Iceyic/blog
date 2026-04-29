import React from 'react';
import '../styles/card.css';

export const UsageFlow: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">使用流程</h2>

      <div className="flow-steps">
        <div className="flow-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>编写源代码</h4>
            <p>使用 C、C++、Rust、Go 等语言编写高性能代码</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>编译为 Wasm</h4>
            <p>使用 Emscripten（对于 C/C++）或 wasm-pack（对于 Rust）等工具编译</p>
            <pre><code>{`# Rust 示例
wasm-pack build --target web

# C/C++ 示例
emcc module.c -o module.wasm`}</code></pre>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>在浏览器中加载</h4>
            <p>使用 WebAssembly API 加载和实例化模块</p>
            <pre><code>{`const { instance } = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
);`}</code></pre>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h4>调用模块函数</h4>
            <p>通过导出的接口与 Wasm 模块交互</p>
            <pre><code>{`const result = instance.exports.calculate(100);
console.log(result);`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};