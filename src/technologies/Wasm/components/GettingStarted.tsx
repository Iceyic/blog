import React from 'react';
import '../styles/card.css';

export const GettingStarted: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">快速上手</h2>

      <p>
        以下是几种常用的 WebAssembly 开发方式。选择最适合你技术栈的方式开始：
      </p>

      <div className="getting-started-grid">
        <div className="gs-item">
          <h3>Rust + wasm-pack</h3>
          <p>现代 WebAssembly 开发的首选方式，强大的类型安全和优秀的运行时性能。</p>
          <pre><code>{`# 安装 wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# 创建项目
cargo install wasm-pack
cargo new my-wasm-project --lib

# 编辑 Cargo.toml 添加
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"

# 构建
wasm-pack build --target web`}</code></pre>
        </div>

        <div className="gs-item">
          <h3>C/C++ + Emscripten</h3>
          <p>成熟的工具链，适合将现有的 C/C++ 代码库编译为 WebAssembly。</p>
          <pre><code>{`# 安装 Emscripten
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh

# 编译 C 代码
emcc my_module.c -o my_module.js -s EXPORTED_FUNCTIONS='["_add"]' -s MODULARIZE=1`}</code></pre>
        </div>

        <div className="gs-item">
          <h3>Go + TinyGo</h3>
          <p>TinyGo 生成的 Wasm 文件体积小，适合嵌入式和 Web 场景。</p>
          <pre><code>{`# 安装 TinyGo
wget https://github.com/tinygo-org/tinygo/releases/download/v0.30.0/tinygo_0.30.0_amd64.deb
dpkg -i tinygo_0.30.0_amd64.deb

# 编译
tinygo build -o module.wasm -target wasm module.go`}</code></pre>
        </div>

        <div className="gs-item">
          <h3>在线体验</h3>
          <p>不想安装任何工具？可以直接在 WebAssembly Studio 中在线编写和运行 Wasm 代码。</p>
          <ul>
            <li>
              <a href="https://webassembly.studio" target="_blank" rel="noopener noreferrer">
                WebAssembly Studio
              </a>
            </li>
            <li>
              <a href="https://wasdk.github.io/WasmFiddle" target="_blank" rel="noopener noreferrer">
                WasmFiddle
              </a>
            </li>
            <li>
              <a href="https://itch.io" target="_blank" rel="noopener noreferrer">
                itch.io - 众多 Wasm 游戏
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="next-steps">
        <h3>后续步骤</h3>
        <ol>
          <li>选择一个你熟悉的语言开始（推荐 Rust）</li>
          <li>阅读官方文档学习 wasm-bindgen / Emscripten 的 API</li>
          <li>尝试将一个简单函数编译为 Wasm 并在页面中调用</li>
          <li>逐步迁移更复杂的逻辑到 Wasm</li>
          <li>使用 WebAssembly 性能分析工具优化瓶颈</li>
        </ol>
      </div>
    </div>
  );
};