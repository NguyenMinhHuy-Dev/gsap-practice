"use client";

import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import { Suspense } from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          <Suspense fallback={null}>{children}</Suspense>
        </SmoothScrolling>
      </body>
    </html>
  );
}
