import { ThemeProvider } from 'next-themes'
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import {DefaultSeo} from "next-seo";
import Script from "next/script";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://abhiraj.co` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <MainLayout>
        <DefaultSeo
          title="Hi, I'm Abhiraj"
          description="I make stuff on the web and write blogs about it"
          canonical={canonicalUrl}
          openGraph={{
            site_name: "Hi, I'm Abhiraj",
            title: "Hi, Abhiraj",
            description:
              "I make stuff on the web and write blogs about it",
            images: [
              {
                url: "https://us-east-1.tixte.net/uploads/abhiraj-is.super-cool.xyz/meta.png",
                width: 1544,
                height: 668,
                alt: "Abhiraj Bhowmick",
              },
            ],
          }}
          twitter={{
            handle: "@rainboestrykr",
            site: "@rainboestrykr",
            cardType: "summary_large_image",
          }}
          additionalLinkTags={[
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-ipad-76x76.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
              sizes: "144x144",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-iphone-60x60.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/apple-touch-icon-iphone-retina-120x120.png",
              sizes: "114x114",
            },
          ]}
        />
            
            <script type="text/javascript">window.$widget = window.$widget || {}; window.WIDGET_SITE_ID = 'bf13d2f0-3aa9-4df9-8d50-f6a00e3bd50e'; (function(w,d){var s = d.createElement('script');s.defer = true;s.src = '//www.widgetscripts.com/embed.js';d.getElementsByTagName('head')[0].appendChild(s);})(window,document);</script>
        {process.env.NODE_ENV == "production" ? (
          // Analytics Script
          <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js"
    id="pirschjs"
    data-code="srGYMdDe2AFaWpr1PLzY3XtQ9lzHnzEh"></script>
        ) : (
          ""
        )}
        
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
