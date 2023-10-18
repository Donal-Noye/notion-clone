"use client";

import { SettingsModal } from "@/components/modals/settings-modal";
import { useEffect, useState } from "react";

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
    </>
  );
};
