import useLoader from "@/hooks/useLoader";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import { withTranslateRoutes } from "next-translate-routes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../components/loader"));

function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoader();

  return (
    <>
      {isLoading && <Loader variant="fullPage" />}
      <Component {...pageProps} />;
    </>
  );
}
export default withTranslateRoutes(App);
