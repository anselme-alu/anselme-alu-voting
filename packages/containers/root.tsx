"use client";

import { PropsWithChildren } from "react";
import { HeroUIProvider } from "@heroui/system";
import { Header } from "../components/organisms/header";
import { ToastProvider } from "@heroui/toast";
import {
  ClerkProvider
} from '@clerk/nextjs'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <HeroUIProvider>
        <div className="bg-slate-100  min-h-screen">
          <Header />
          {children}
        </div>
        <ToastProvider placement="top-center" />
      </HeroUIProvider>
    </ClerkProvider>
  )
}
