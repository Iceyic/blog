import React from 'react';
import '../styles/card.css';

export const CompleteExample: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">完整示例：Rust 计算器</h2>

      <p>
        以下是一个完整的 Rust 编译为 WebAssembly 的示例。
        我们将创建一个简单的计算器，可以在浏览器中计算斐波那契数列。
      </p>

      <h3>1. Rust 代码 (src/lib.rs)</h3>
      <pre><code>{`use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let mut a: u32 = 0;
            let mut b: u32 = 1;
            for _ in 2..=n {
                let temp = a + b;
                a = b;
                b = temp;
            }
            b
        }
    }
}

#[wasm_bindgen]
pub fn factorial(n: u32) -> u32 {
    (1..=n).product()
}`}</code></pre>

      <h3>2. 构建配置 (Cargo.toml)</h3>
      <pre><code>{`[package]
name = "wasm-calculator"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"`}</code></pre>

      <h3>3. JavaScript 调用代码</h3>
      <pre><code>{`import init, { fibonacci, factorial } from './pkg/wasm_calculator.js';

async function run() {
  await init();

  console.log('Fibonacci(40):', fibonacci(40));
  console.log('Factorial(20):', factorial(20));
}

run();`}</code></pre>

      <h3>4. 构建和部署</h3>
      <pre><code>{`# 安装 wasm-pack
cargo install wasm-pack

# 构建 WebAssembly 模块
wasm-pack build --target web

# 生成的文件
# pkg/
#   ├── wasm_calculator.js
#   ├── wasm_calculator_bg.wasm
#   └── wasm_calculator.d.ts`}</code></pre>

      <div className="example-result">
        <h4>运行结果</h4>
        <p>Fibonacci(40): 102334155</p>
        <p>Factorial(20): 2432902008176640000</p>
      </div>
    </div>
  );
};