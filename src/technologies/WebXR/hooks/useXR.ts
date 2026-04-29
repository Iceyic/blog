import { useState, useEffect, useCallback } from 'react';
import type { XRSupport } from '../types/xr';

export function useXRSupport() {
  const [support, setSupport] = useState<XRSupport>({
    supported: false,
    immersiveVR: false,
    immersiveAR: false,
    checking: true,
  });

  useEffect(() => {
    async function checkSupport() {
      if (!('xr' in navigator)) {
        setSupport({
          supported: false,
          immersiveVR: false,
          immersiveAR: false,
          checking: false,
        });
        return;
      }

      try {
        const [vrSupported, arSupported] = await Promise.all([
          navigator.xr!.isSessionSupported('immersive-vr'),
          navigator.xr!.isSessionSupported('immersive-ar'),
        ]);

        setSupport({
          supported: vrSupported || arSupported,
          immersiveVR: vrSupported,
          immersiveAR: arSupported,
          checking: false,
        });
      } catch {
        setSupport({
          supported: false,
          immersiveVR: false,
          immersiveAR: false,
          checking: false,
        });
      }
    }

    checkSupport();
  }, []);

  return support;
}

export function useXRSession() {
  const [session, setSession] = useState<XRSession | null>(null);
  const [isXRActive, setIsXRActive] = useState(false);

  const enterXR = useCallback(async (mode: 'immersive-vr' | 'immersive-ar' = 'immersive-vr') => {
    if (!navigator.xr || isXRActive) return null;

    try {
      const xrSession = await navigator.xr.requestSession(mode, {
        requiredFeatures: ['local-floor'],
      });
      setSession(xrSession);
      setIsXRActive(true);
      return xrSession;
    } catch (err) {
      console.error('无法进入 XR 会话:', err);
      return null;
    }
  }, [isXRActive]);

  const exitXR = useCallback(() => {
    if (session) {
      session.end();
      setSession(null);
      setIsXRActive(false);
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      session.addEventListener('end', () => {
        setSession(null);
        setIsXRActive(false);
      });
    }
  }, [session]);

  return { session, isXRActive, enterXR, exitXR };
}
