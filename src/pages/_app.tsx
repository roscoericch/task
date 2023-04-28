import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const NavLayout = dynamic(() => import("@/components/Navlayout"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <NavLayout />
      <Component {...pageProps} />
    </div>
  );
}
