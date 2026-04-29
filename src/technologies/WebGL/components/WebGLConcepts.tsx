import React from 'react';
import '../styles/card.css';

const concepts = [
  {
    title: 'Canvas 与上下文',
    description: 'WebGL 需要一个 HTML Canvas 元素和 WebGL 渲染上下文',
    code: `const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');`,
  },
  {
    title: '着色器程序 (Shaders)',
    description: 'GPU 上运行的程序，分为顶点着色器和片元着色器',
    code: `// 顶点着色器 - 处理顶点位置
attribute vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}

// 片元着色器 - 处理像素颜色
precision mediump float;
uniform vec4 uColor;
void main() {
  gl_FragColor = uColor;
}`,
  },
  {
    title: '缓冲区 (Buffers)',
    description: '存储顶点数据、索引数据等 GPU 所需信息',
    code: `const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);`,
  },
  {
    title: '图元 (Primitives)',
    description: 'WebGL 支持的绘制图元：点、线、三角形',
    code: `gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
// 可选图元：gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.TRIANGLE_STRIP`,
  },
  {
    title: '变换矩阵',
    description: '用于平移、旋转、缩放物体的 4x4 矩阵',
    code: `// 投影矩阵 (Perspective)
mat4.perspective(pMatrix, glMatrix.RADIANS, aspect, 0.1, 100.0);

// 模型矩阵 (Model) - 物体变换
mat4.translate(mMatrix, mMatrix, [x, y, z]);
mat4.rotateX(mMatrix, mMatrix, angle);`,
  },
  {
    title: '纹理贴图 (Textures)',
    description: '将图片映射到 3D 物体表面',
    code: `const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
gl.generateMipmap(gl.TEXTURE_2D);`,
  },
];

export const WebGLConcepts: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">WebGL 核心概念</h2>

      {concepts.map((concept, index) => (
        <div key={index} className="concept-item">
          <h3>{concept.title}</h3>
          <p>{concept.description}</p>
          <div className="code-block">
            <pre>{concept.code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
