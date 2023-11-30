import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
export default function TanstackQuery({
  children,
}: {
  children: React.ReactElement;
}) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
