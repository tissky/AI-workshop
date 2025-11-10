"use client";

import { Suspense, lazy } from "react";

const QRModal = lazy(() => import("./QRModal"));

interface QRModalWrapperProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function QRModalWrapper(props: QRModalWrapperProps) {
  return (
    <Suspense fallback={null}>
      <QRModal {...props} />
    </Suspense>
  );
}
