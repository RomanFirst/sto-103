import useTranslation from "next-translate/useTranslation";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const { t, lang } = useTranslation("");

  return (
    <Html lang={lang}>
      <Head />
      <body id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
