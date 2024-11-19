import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
          <Head>
              <link
                  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                  rel="stylesheet"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link
                  href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"/>

              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="Sherly & Daeng Wedding Invitation"/>
              <meta name="keywords" content="wedding, invitation, Sherly, Daeng"/>
              <meta name="author" content="Sherly & Daeng"/>
              <meta property="og:title" content="Sherly & Daeng Wedding"/>
              <meta
                  property="og:description"
                  content="Join us for the wedding of Sherly & Daeng."
              />
              <meta property="og:image" content="https://example.com/image.jpg"/>
              <meta property="og:url" content="https://example.com"/>
              <meta name="twitter:card" content="summary_large_image"/>
              <meta name="twitter:title" content="Sherly & Daeng Wedding"/>
              <meta name="twitter:description" content="Join us for the wedding of Sherly & Daeng."/>
              <meta name="twitter:image" content="https://example.com/image.jpg"/>
              <title>A & B Wedding</title>

          </Head>
          <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript/>
          <Main/>
          <NextScript/>
          </body>
      </Html>
    );
  }
}
