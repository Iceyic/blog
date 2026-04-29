import React, { useState, useEffect, useRef } from 'react';
import './WasmDemo.css';

export const WasmDemo: React.FC = () => {
  const [fibResult, setFibResult] = useState<number | null>(null);
  const [factorialResult, setFactorialResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const drawMandelbrot = () => {
      const width = canvas.width;
      const height = canvas.height;
      const maxIter = 100;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let py = 0; py < height; py++) {
        for (let px = 0; px < width; px++) {
          const x0 = (px / width) * 3.5 - 2.5;
          const y0 = (py / height) * 2.2 - 1.1;
          let x = 0;
          let y = 0;
          let iteration = 0;

          while (x * x + y * y <= 4 && iteration < maxIter) {
            const xTemp = x * x - y * y + x0;
            y = 2 * x * y + y0;
            x = xTemp;
            iteration++;
          }

          const idx = (py * width + px) * 4;
          if (iteration === maxIter) {
            data[idx] = 0;
            data[idx + 1] = 0;
            data[idx + 2] = 0;
          } else {
            const hue = (iteration / maxIter) * 360;
            data[idx] = hue * 255 / 360;
            data[idx + 1] = 200;
            data[idx + 2] = 255;
          }
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    drawMandelbrot();
  }, []);

  const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };

  const calculateFactorial = (n: number): number => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const handleFibonacci = () => {
    setIsLoading(true);
    setTimeout(() => {
      const result = calculateFibonacci(40);
      setFibResult(result);
      setIsLoading(false);
    }, 50);
  };

  const handleFactorial = () => {
    setIsLoading(true);
    setTimeout(() => {
      const result = calculateFactorial(20);
      setFactorialResult(result);
      setIsLoading(false);
    }, 50);
  };

  return (
    <div className="card wasm-demo-card">
      <h2 className="card-title">Wasm 交互示例</h2>

      <div className="wasm-demo-section">
        <h3>Mandelbrot 分形图</h3>
        <p>浏览器中使用 Canvas 绘制 Mandelbrot 分形图，展示 WebAssembly 的计算能力</p>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="mandelbrot-canvas"
        />
        <p className="demo-note">
          此图使用纯 JavaScript 在浏览器中实时计算并渲染
        </p>
      </div>

      <div className="wasm-demo-section">
        <h3>计算密集型任务</h3>

        <div className="calc-buttons">
          <button
            onClick={handleFibonacci}
            disabled={isLoading}
            className="calc-button"
          >
            计算斐波那契 (40)
          </button>
          <button
            onClick={handleFactorial}
            disabled={isLoading}
            className="calc-button"
          >
            计算阶乘 (20)
          </button>
        </div>

        <div className="results">
          {fibResult !== null && (
            <div className="result-item">
              <span className="result-label">斐波那契 F(40):</span>
              <span className="result-value">{fibResult.toLocaleString()}</span>
            </div>
          )}
          {factorialResult !== null && (
            <div className="result-item">
              <span className="result-label">阶乘 20!:</span>
              <span className="result-value">{factorialResult.toLocaleString()}</span>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="loading-indicator">计算中...</div>
        )}
      </div>

      <div className="wasm-demo-section">
        <h3>Wasm 在生产中的应用</h3>
        <ul className="wasm-apps-list">
          <li><strong>AutoCAD Web</strong> - 桌面级 CAD 软件在浏览器中运行</li>
          <li><strong>Figma</strong> - 使用 Rust/Wasm 实现高性能设计工具</li>
          <li><strong>Google Earth</strong> - 3D 地球在浏览器中流畅运行</li>
          <li><strong>OpenCV</strong> - 计算机视觉库编译为 Wasm 用于浏览器</li>
        </ul>
      </div>
    </div>
  );
};