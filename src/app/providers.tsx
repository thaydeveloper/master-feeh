/* eslint-disable prettier/prettier */
// app/providers.tsx
/* eslint-disable react/react-in-jsx-scope */

"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ChakraProvider>{children}</ChakraProvider>;
}
