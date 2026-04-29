export interface XRSupport {
  supported: boolean;
  immersiveVR: boolean;
  immersiveAR: boolean;
  checking: boolean;
}

export interface XRSessionState {
  isActive: boolean;
  session: XRSession | null;
  refSpace: XRReferenceSpace | null;
}
