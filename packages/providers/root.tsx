"use client";

import { PropsWithChildren } from "react";
import { HeroUIProvider } from "@heroui/system";

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
