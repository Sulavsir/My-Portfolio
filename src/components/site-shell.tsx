"use client";

import { Navbar } from "@/components/navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { SpotlightCursor } from "@/components/spotlight-cursor";
import { useActiveSection } from "@/hooks/use-active-section";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "certifications",
  "contact",
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <SmoothScrollProvider>
      <SpotlightCursor />
      <Navbar activeId={activeId} />
      {children}
    </SmoothScrollProvider>
  );
}
