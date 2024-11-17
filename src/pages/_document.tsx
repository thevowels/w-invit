import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wedding'
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
          <Head>
              <link
                  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                  rel="stylesheet"
              />
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="description" content="Sherly & Daeng Wedding Invitation" />
              <meta name="keywords" content="wedding, invitation, Sherly, Daeng" />
              <meta name="author" content="Sherly & Daeng" />
              <meta property="og:title" content="Sherly & Daeng Wedding" />
              <meta
                  property="og:description"
                  content="Join us for the wedding of Sherly & Daeng."
              />
              <meta property="og:image" content="https://example.com/image.jpg" />
              <meta property="og:url" content="https://example.com" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Sherly & Daeng Wedding" />
              <meta name="twitter:description" content="Join us for the wedding of Sherly & Daeng." />
              <meta name="twitter:image" content="https://example.com/image.jpg" />
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
