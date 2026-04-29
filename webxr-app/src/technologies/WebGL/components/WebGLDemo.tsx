import React, { useRef, useEffect } from 'react';
import './WebGLDemo.css';

export const WebGLDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const rotationRef = useRef(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL 不可用');
      return;
    }

    const vsSource = `
      attribute vec4 aVertexPosition;
      attribute vec4 aVertexColor;
      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      varying lowp vec4 vColor;
      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
      }
    `;

    const fsSource = `
      varying lowp vec4 vColor;
      void main() {
        gl_FragColor = vColor;
      }
    `;

    function createShader(targetGl: WebGLRenderingContext, type: number, source: string) {
      const shader = targetGl.createShader(type);
      if (!shader) return null;
      targetGl.shaderSource(shader, source);
      targetGl.compileShader(shader);
      if (!targetGl.getShaderParameter(shader, targetGl.COMPILE_STATUS)) {
        console.error(targetGl.getShaderInfoLog(shader));
        targetGl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;
    gl.useProgram(program);

    const cubePositions: number[] = [
      -1.0, -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0,  1.0,  1.0,
      -1.0, -1.0, -1.0, -1.0,  1.0, -1.0,  1.0,  1.0, -1.0, -1.0, -1.0, -1.0,  1.0,  1.0, -1.0,  1.0, -1.0, -1.0,
      -1.0,  1.0, -1.0, -1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0,  1.0, -1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0,
      -1.0, -1.0, -1.0,  1.0, -1.0, -1.0,  1.0, -1.0,  1.0, -1.0, -1.0, -1.0,  1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
       1.0, -1.0, -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0,  1.0,
      -1.0, -1.0, -1.0, -1.0, -1.0,  1.0, -1.0,  1.0,  1.0, -1.0, -1.0, -1.0, -1.0,  1.0,  1.0, -1.0,  1.0, -1.0,
    ];

    const faceColors: number[][] = [
      [1.0, 0.0, 0.0, 1.0],
      [0.0, 1.0, 0.0, 1.0],
      [0.0, 0.0, 1.0, 1.0],
      [1.0, 1.0, 0.0, 1.0],
      [1.0, 0.0, 1.0, 1.0],
      [0.0, 1.0, 1.0, 1.0],
    ];

    let colors: number[] = [];
    for (let j = 0; j < faceColors.length; j++) {
      const c = faceColors[j];
      colors = colors.concat(c, c, c, c, c, c);
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubePositions), gl.STATIC_DRAW);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'aVertexPosition');
    const colorLocation = gl.getAttribLocation(program, 'aVertexColor');

    function perspective(fov: number, aspect: number, near: number, far: number): Float32Array {
      const f = 1.0 / Math.tan(fov / 2);
      const nf = 1 / (near - far);
      return new Float32Array([
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, 2 * far * near * nf, 0,
      ]);
    }

    function translate(m: Float32Array, v: number[]): Float32Array {
      const out = new Float32Array(m);
      const x = v[0], y = v[1], z = v[2];
      out[12] = m[0] * x + m[4] * y + m[8] * z + m[12];
      out[13] = m[1] * x + m[5] * y + m[9] * z + m[13];
      out[14] = m[2] * x + m[6] * y + m[10] * z + m[14];
      out[15] = m[3] * x + m[7] * y + m[11] * z + m[15];
      return out;
    }

    function rotateX(m: Float32Array, rad: number): Float32Array {
      const s = Math.sin(rad), c = Math.cos(rad);
      const out = new Float32Array(m);
      const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
      const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    }

    function rotateY(m: Float32Array, rad: number): Float32Array {
      const s = Math.sin(rad), c = Math.cos(rad);
      const out = new Float32Array(m);
      const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
      const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];
      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    }

    function render(now: number) {
      now *= 0.001;
      rotationRef.current = now;

      gl!.clearColor(0.1, 0.12, 0.18, 1.0);
      gl!.clearDepth(1.0);
      gl!.enable(gl!.DEPTH_TEST);
      gl!.depthFunc(gl!.LEQUAL);
      gl!.clear(gl!.COLOR_BUFFER_BIT | gl!.DEPTH_BUFFER_BIT);

      const fieldOfView = 45 * Math.PI / 180;
      const aspect = canvas!.clientWidth / canvas!.clientHeight;
      const projectionMatrix = perspective(fieldOfView, aspect, 0.1, 100.0);

      let modelViewMatrix = translate(new Float32Array(16), [0.0, 0.0, -6.0]);
      modelViewMatrix = rotateX(modelViewMatrix, rotationRef.current * 0.5);
      modelViewMatrix = rotateY(modelViewMatrix, rotationRef.current * 0.7);

      gl!.bindBuffer(gl!.ARRAY_BUFFER, positionBuffer);
      gl!.enableVertexAttribArray(positionLocation);
      gl!.vertexAttribPointer(positionLocation, 3, gl!.FLOAT, false, 0, 0);

      gl!.bindBuffer(gl!.ARRAY_BUFFER, colorBuffer);
      gl!.enableVertexAttribArray(colorLocation);
      gl!.vertexAttribPointer(colorLocation, 4, gl!.FLOAT, false, 0, 0);

      gl!.useProgram(program);

      const projectionMatrixLocation = gl!.getUniformLocation(program!, 'uProjectionMatrix');
      const modelViewMatrixLocation = gl!.getUniformLocation(program!, 'uModelViewMatrix');

      gl!.uniformMatrix4fv(projectionMatrixLocation, false, projectionMatrix);
      gl!.uniformMatrix4fv(modelViewMatrixLocation, false, modelViewMatrix);

      gl!.drawArrays(gl!.TRIANGLES, 0, 36);

      animationRef.current = requestAnimationFrame(render);
    }

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="demo-section">
      <div className="demo-card">
        <div className="demo-header">
          <h3>WebGL 旋转立方体</h3>
          <p>纯 WebGL API 实现的彩色旋转立方体，展示顶点着色器、片元着色器和矩阵变换</p>
        </div>
        <div className="demo-content">
          <div className="webgl-canvas-container">
            <canvas ref={canvasRef} className="webgl-canvas" />
            <div className="canvas-overlay">纯 WebGL 渲染</div>
          </div>
        </div>
      </div>
    </section>
  );
};
