export interface Technology {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export const technologies: Technology[] = [
  {
    id: 'webgl',
    name: 'WebGL',
    description: '浏览器中的 2D/3D 图形渲染 API，基于 OpenGL ES，提供硬件加速的图形渲染能力',
    color: '#cc0000',
    icon: '🎨',
  },
  {
    id: 'threejs',
    name: 'Three.js',
    description: '构建在 WebGL 之上的高级 3D 图形库，简化 3D 开发流程',
    color: '#049ef4',
    icon: '📦',
  },
  {
    id: 'webxr',
    name: 'WebXR',
    description: '在浏览器中构建沉浸式 VR 与 AR 体验的 Web 标准 API',
    color: '#00d9ff',
    icon: '🥽',
  },
  {
    id: 'wasm',
    name: 'WebAssembly',
    description: '高性能的字节码格式，让浏览器可以实现接近原生的计算性能',
    color: '#654ff0',
    icon: '⚙️',
  },
];

export const getTechnology = (id: string): Technology | undefined => {
  return technologies.find((tech) => tech.id === id);
};
