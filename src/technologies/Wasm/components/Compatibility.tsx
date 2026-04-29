import React from 'react';
import '../styles/card.css';

export const Compatibility: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">浏览器兼容性</h2>

      <p>
        WebAssembly 是现代浏览器的标准功能，获得了所有主流浏览器的良好支持。
        以下是各浏览器对 WebAssembly 的支持情况：
      </p>

      <div className="compat-table">
        <div className="compat-header">
          <div className="compat-browser">浏览器</div>
          <div className="compat-version">最低版本</div>
          <div className="compat-status">支持状态</div>
        </div>

        <div className="compat-row">
          <div className="compat-browser">
            <span className="browser-icon chrome"></span>
            Chrome
          </div>
          <div className="compat-version">57</div>
          <div className="compat-status status-good">完全支持</div>
        </div>

        <div className="compat-row">
          <div className="compat-browser">
            <span className="browser-icon firefox"></span>
            Firefox
          </div>
          <div className="compat-version">52</div>
          <div className="compat-status status-good">完全支持</div>
        </div>

        <div className="compat-row">
          <div className="compat-browser">
            <span className="browser-icon safari"></span>
            Safari
          </div>
          <div className="compat-version">11</div>
          <div className="compat-status status-good">完全支持</div>
        </div>

        <div className="compat-row">
          <div className="compat-browser">
            <span className="browser-icon edge"></span>
            Edge
          </div>
          <div className="compat-version">16</div>
          <div className="compat-status status-good">完全支持</div>
        </div>

        <div className="compat-row">
          <div className="compat-browser">
            <span className="browser-icon opera"></span>
            Opera
          </div>
          <div className="compat-version">44</div>
          <div className="compat-status status-good">完全支持</div>
        </div>
      </div>

      <div className="compat-note">
        <h4>移动端支持</h4>
        <ul>
          <li><strong>iOS Safari:</strong> 11+ 完全支持 WebAssembly</li>
          <li><strong>Android Chrome:</strong> 57+ 完全支持 WebAssembly</li>
          <li><strong>微信小程序:</strong> 支持 WebAssembly</li>
        </ul>
      </div>

      <div className="compat-note">
        <h4>Node.js 支持</h4>
        <p>
          Node.js 从 v8.0.0 开始支持 WebAssembly。可以使用 <code>WebAssembly.instantiate()</code> 或
          <code> WebAssembly.instantiateStreaming()</code> 加载模块。
        </p>
      </div>

      <div className="compat-tools">
        <h4>工具链支持</h4>
        <ul>
          <li><strong>Emscripten:</strong> C/C++ 编译到 WebAssembly (LLVM)</li>
          <li><strong>wasm-pack:</strong> Rust 编译到 WebAssembly</li>
          <li><strong>Go:</strong> 内置 WASM 支持 (<code>GOOS=js GOARCH=wasm</code>)</li>
          <li><strong>Blazor:</strong> .NET 编译到 WebAssembly</li>
          <li><strong>Pyodide:</strong> Python 在浏览器中运行 (基于 Wasm)</li>
        </ul>
      </div>
    </div>
  );
};