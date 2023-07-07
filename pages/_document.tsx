import { DefaultSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const { t, lang } = useTranslation("");

  return (
    <Html lang={lang}>
      <DefaultSeo
        openGraph={{
          title: "Garage 103",
          description: t("home:descriptionSEO"),
          images: [
            {
              url: "https://sto-103.vercel.app/img/logo.png",
              alt: "logo",
            },
          ],
          url: "https://sto-103.vercel.app",
        }}
      />
      <Head />
      <body id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
