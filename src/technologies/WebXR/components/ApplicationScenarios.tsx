import React from 'react';
import '../styles/card.css';
import '../styles/feature.css';

const scenarios = [
  { title: '虚拟展厅', description: '在线参观博物馆、艺术展、产品展厅' },
  { title: '虚拟培训', description: '安全培训、技能训练、模拟演练' },
  { title: '3D 可视化', description: '房地产预览、工业设计、数据可视化' },
  { title: '社交游戏', description: '多人协作游戏、虚拟聚会、远程协作' },
  { title: 'AR 营销', description: '产品展示、试穿试用、互动广告' },
  { title: '远程协作', description: '3D 白板协作、虚拟会议室、远程指导' },
];

export const ApplicationScenarios: React.FC = () => {
  return (
    <div className="card scenarios-card">
      <h2 className="card-title">WebXR 应用场景</h2>
      <div className="feature-grid">
        {scenarios.map((scenario, index) => (
          <div key={index} className="feature-item">
            <h4>{scenario.title}</h4>
            <p>{scenario.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
