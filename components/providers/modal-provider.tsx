"use client";

import { SettingsModal } from "@/components/modals/settings-modal";
import { useEffect, useState } from "react";
import { CoverImageModal } from "@/components/modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounting, setIsMounting] = useState(false);

  useEffect(() => {
    setIsMounting(true)
  }, []);

  if (!isMounting) {
    return null
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
