"use client";

import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SmoothScrolling>
            <Suspense fallback={null}>{children}</Suspense>
          </SmoothScrolling>
        </QueryClientProvider>
      </body>
    </html>
  );
}
