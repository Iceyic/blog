import React from 'react';
import '../styles/card.css';

export const CoreConcepts: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">核心概念</h2>

      <h3>XRSession</h3>
      <p>XR 会话是与 XR 设备交互的主要接口。创建会话后才能进入 XR 体验。</p>

      <h3>Reference Space</h3>
      <p>参考空间定义了虚拟世界的坐标系统和度量单位：</p>
      <ul>
        <li><code>viewer</code> - 相对于视图的追踪空间</li>
        <li><code>local</code> - 相对于设备初始位置的稳定空间</li>
        <li><code>local-floor</code> - 以用户脚底为原点的空间</li>
        <li><code>bounded-floor</code> - 有边界的楼层空间</li>
        <li><code>unbounded</code> - 可无限移动的空间</li>
      </ul>

      <h3>XRFrame</h3>
      <p>每帧更新时获取，包含设备姿态、视图投影和输入状态信息。</p>
    </div>
  );
};
