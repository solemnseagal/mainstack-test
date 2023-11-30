import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {ReactQueryDevtools} from '@tanstack'

import React from "react";

export default function AppQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
