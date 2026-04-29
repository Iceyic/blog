import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { WebGLPage } from './pages/WebGLPage';
import { WebXRPage } from './pages/WebXRPage';
import { ThreeJSPage } from './pages/ThreeJSPage';
import { WasmPage } from './pages/WasmPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webgl" element={<WebGLPage />} />
        <Route path="/threejs" element={<ThreeJSPage />} />
        <Route path="/webxr" element={<WebXRPage />} />
        <Route path="/wasm" element={<WasmPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
