import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
export default function TanstackQuery({
  children,
}: {
  children: React.ReactElement;
}) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          retry: 1,
          staleTime: 30 * 1000,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
