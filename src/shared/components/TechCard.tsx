import type { Technology } from '../../types/technology';
import './TechCard.css';

interface TechCardProps {
  technology: Technology;
  onClick: () => void;
}

export const TechCard: React.FC<TechCardProps> = ({ technology, onClick }) => {
  return (
    <div className="tech-card" onClick={onClick} style={{ '--tech-color': technology.color } as React.CSSProperties}>
      <div className="tech-card-icon">{technology.icon}</div>
      <h3 className="tech-card-name">{technology.name}</h3>
      <p className="tech-card-desc">{technology.description}</p>
      <div className="tech-card-arrow">→</div>
    </div>
  );
};
