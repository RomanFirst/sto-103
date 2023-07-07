import useLoader from "@/hooks/useLoader";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import { withTranslateRoutes } from "next-translate-routes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Russo_One } from "next/font/google";

const Loader = dynamic(() => import("../components/loader"));
const russoOne = Russo_One({ subsets: ["cyrillic"], weight: "400" });

function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoader();

  return (
    <div className={`${russoOne.className}`}>
      {isLoading && <Loader variant="fullPage" />}
      <Component {...pageProps} />;
    </div>
  );
}
export default withTranslateRoutes(App);
