import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavLayout from "@/components/Navlayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <NavLayout />
      <Component {...pageProps} />
    </div>
  );
}
