import React from 'react';
import '../styles/card.css';

export const ApplicationScenarios: React.FC = () => {
  return (
    <div className="card">
      <h2 className="card-title">应用场景</h2>

      <div className="scenario-grid">
        <div className="scenario-item">
          <h3>游戏开发</h3>
          <p>
            Unity、Unreal Engine 等主流游戏引擎已支持导出 WebAssembly 版本。
            玩家无需下载安装，直接在浏览器中体验 3A 级游戏。
          </p>
          <ul>
            <li>《Doom》《毁灭战士》经典游戏已在浏览器中运行</li>
            <li>Unity WebGL 发布让海量游戏进入浏览器</li>
            <li>性能接近原生应用的体验</li>
          </ul>
        </div>

        <div className="scenario-item">
          <h3>音视频处理</h3>
          <p>
            FFmpeg 编译为 Wasm 后，可以在浏览器中进行视频转码、剪辑等操作。
            WebCodecs API 与 Wasm 结合，实现高效的媒体处理。
          </p>
          <ul>
            <li>浏览器端视频格式转换</li>
            <li>实时视频滤镜和特效</li>
            <li>音频降噪和增强</li>
          </ul>
        </div>

        <div className="scenario-item">
          <h3>图像处理与计算机视觉</h3>
          <p>
            OpenCV、TensorFlow 等库已支持 WebAssembly。
            浏览器端可以实现人脸识别、图像分割、风格迁移等 AI 功能。
          </p>
          <ul>
            <li>实时人脸检测和表情识别</li>
            <li>图像增强和修复</li>
            <li>AR 特效和滤镜</li>
          </ul>
        </div>

        <div className="scenario-item">
          <h3>科学计算与可视化</h3>
          <p>
            分子动力学、有限元分析、CAD 等高性能计算应用可以移植到浏览器。
            研究人员可以在任何设备上访问强大的计算工具。
          </p>
          <ul>
            <li>分子结构 3D 可视化</li>
            <li>气候模型计算</li>
            <li>工程仿真和建模</li>
          </ul>
        </div>

        <div className="scenario-item">
          <h3>加密与安全</h3>
          <p>
            加密货币钱包、区块链节点可以在浏览器中运行。
            Wasm 的沙箱特性提供了良好的安全隔离。
          </p>
          <ul>
            <li>去中心化应用 (DApp)</li>
            <li>密码学运算</li>
            <li>安全的多方计算</li>
          </ul>
        </div>

        <div className="scenario-item">
          <h3>插件与扩展</h3>
          <p>
            浏览器插件可以使用 Wasm 实现高性能的页面分析、广告拦截等功能。
            比传统 JavaScript 实现性能提升数倍。
          </p>
          <ul>
            <li>广告拦截规则引擎</li>
            <li>页面性能分析工具</li>
            <li>内容格式转换</li>
          </ul>
        </div>
      </div>
    </div>
  );
};