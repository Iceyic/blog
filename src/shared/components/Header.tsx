import { useState, useEffect } from 'react';
import type { XRSupport } from '../../technologies/WebXR/types/xr';
import './Header.css';

export const Header: React.FC<{ xrSupport?: XRSupport }> = ({ xrSupport }) => {
  const [support, setSupport] = useState<XRSupport>({
    supported: false,
    immersiveVR: false,
    immersiveAR: false,
    checking: true,
  });

  useEffect(() => {
    if (xrSupport) {
      setSupport(xrSupport);
      return;
    }

    async function checkSupport() {
      if (!('xr' in navigator)) {
        setSupport(prev => ({ ...prev, checking: false }));
        return;
      }

      try {
        const vrSupported = await navigator.xr!.isSessionSupported('immersive-vr');
        setSupport({
          supported: vrSupported,
          immersiveVR: vrSupported,
          immersiveAR: false,
          checking: false,
        });
      } catch {
        setSupport(prev => ({ ...prev, checking: false }));
      }
    }

    checkSupport();
  }, [xrSupport]);

  const getStatusDisplay = () => {
    if (support.checking) {
      return { class: 'checking', text: '正在检测 WebXR 支持...' };
    }
    if (support.immersiveVR) {
      return { class: 'supported', text: 'WebXR VR 已支持' };
    }
    return { class: 'unsupported', text: 'WebXR 不可用' };
  };

  const status = getStatusDisplay();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">WebXR & WebGL</h1>
        <p className="header-subtitle">
          浏览器图形与沉浸式技术知识库
        </p>
        <div className="header-status">
          <span className={`status-indicator ${status.class}`}></span>
          <span>{status.text}</span>
        </div>
      </div>
    </header>
  );
};
