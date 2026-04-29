import React from 'react';
import '../styles/card.css';

const codeSnippets = [
  {
    title: '1. 检测设备支持',
    code: `if ('xr' in navigator) {
  const supported = await navigator.xr.isSessionSupported('immersive-vr');
  console.log(supported ? 'WebXR 已支持' : 'WebXR 不支持');
}`,
  },
  {
    title: '2. 请求 XR 会话',
    code: `const session = await navigator.xr.requestSession('immersive-vr', {
  requiredFeatures: ['local-floor'],
  optionalFeatures: ['bounded-floor', 'hand-tracking']
});`,
  },
  {
    title: '3. 创建渲染层',
    code: `const glLayer = new XRWebGLLayer(session, glContext);
session.updateRenderState({ baseLayer: glLayer });`,
  },
  {
    title: '4. 请求参考空间',
    code: `const refSpace = await session.requestReferenceSpace('local-floor');`,
  },
  {
    title: '5. 渲染循环',
    code: `function onXRFrame(time, frame) {
  const pose = frame.getViewerPose(refSpace);
  for (const view of pose.views) {
    const viewport = glLayer.getViewport(view);
    gl.context.viewport(viewport);
  }
  session.requestAnimationFrame(onXRFrame);
}
session.requestAnimationFrame(onXRFrame);`,
  },
];

export const UsageFlow: React.FC = () => {
  return (
    <div className="card usage-flow">
      <h2 className="card-title">基本使用流程</h2>

      {codeSnippets.map((snippet, index) => (
        <div key={index} className="usage-step">
          <h3>{snippet.title}</h3>
          <div className="code-block">
            <pre>{snippet.code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};
