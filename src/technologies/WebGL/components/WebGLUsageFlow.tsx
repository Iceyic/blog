import React from 'react';
import '../styles/card.css';

const basicSteps = [
  {
    title: '1. 获取 Canvas 与 WebGL 上下文',
    code: `const canvas = document.querySelector('#glCanvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  console.error('WebGL 不可用');
}`,
  },
  {
    title: '2. 编写着色器源代码',
    code: `const vsSource = \`
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;
  varying lowp vec4 vColor;
  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vColor = aVertexColor;
  }
\`;

const fsSource = \`
  varying lowp vec4 vColor;
  void main() {
    gl_FragColor = vColor;
  }
\``,
  },
  {
    title: '3. 编译着色器程序',
    code: `function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);`,
  },
  {
    title: '4. 创建并链接程序',
    code: `const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
  console.error(gl.getProgramInfoLog(shaderProgram));
}

gl.useProgram(shaderProgram);`,
  },
  {
    title: '5. 设置顶点数据',
    code: `const positions = [
   0.0,  1.0,  0.0,
  -1.0, -1.0,  0.0,
   1.0, -1.0,  0.0,
];

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

const positionLocation = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);`,
  },
  {
    title: '6. 渲染循环',
    code: `function render() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fieldOfView = 45 * Math.PI / 180;
  const aspect = canvas.width / canvas.height;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  const modelViewMatrix = mat4.create();
  mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
  requestAnimationFrame(render);
}
render();`,
  },
];

export const WebGLUsageFlow: React.FC = () => {
  return (
    <div className="card webgl-usage">
      <h2 className="card-title">WebGL 基本使用流程</h2>

      {basicSteps.map((step, index) => (
        <div key={index} className="usage-step">
          <h3>{step.title}</h3>
          <div className="code-block">
            <pre>{step.code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
