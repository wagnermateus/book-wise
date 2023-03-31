import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { globalStyles } from "../styles/global";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

globalStyles();

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}
