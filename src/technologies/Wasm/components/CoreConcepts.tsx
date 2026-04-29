import React from 'react';
import '../styles/card.css';

export const CoreConcepts: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">核心概念</h2>

      <h3>模块（Module）</h3>
      <p>
        WebAssembly 模块是编译后的代码单元，包含函数、表（Tables）、内存（Memory）等定义。
        模块可以被 JavaScript 加载和实例化。
      </p>
      <pre><code>{`const wasmModule = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
);`}</code></pre>

      <h3>实例（Instance）</h3>
      <p>
        实例是模块的运行时对象，包含导出的函数和内存。通过实例可以调用 Wasm 模块中定义的函数。
      </p>
      <pre><code>{`const { exports } = wasmModule.instance;
exports.myFunction(42);`}</code></pre>

      <h3>内存模型</h3>
      <p>
        WebAssembly 使用线性内存模型，通过 Memory 对象管理。可以从 JavaScript 创建和操作内存，
        也可以在 Wasm 模块内部管理内存。
      </p>
      <pre><code>{`const memory = new WebAssembly.Memory({ initial: 10 });
const view = new Uint8Array(memory.buffer);`}</code></pre>

      <h3>表（Tables）</h3>
      <p>
        表是 Wasm 中存储函数引用的数据结构，用于实现间接函数调用。
        在 JavaScript 和 Wasm 之间传递函数时非常有用。
      </p>

      <h3>导入/导出</h3>
      <p>
        Wasm 模块可以导入 JavaScript 函数和对象，也可以在实例化时从外部传入。
        这种机制使得 JavaScript 和 Wasm 可以相互调用。
      </p>
    </div>
  );
};