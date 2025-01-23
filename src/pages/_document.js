import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/images/pixavia-logo-black.png" type="image/x-icon" />
          {/* favicon */}

          {/* Fonts */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Epilogue%3Aital%2Cwght%400%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900&#038;display=swap"
            type="text/css"
            media="all"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMeJoIVkCj24bRWek9mFyHihScLYt7V4ytjueTz"
            crossOrigin="anonymous"
          />

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/vendors/bootstrap.css" />
          <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
          <link rel="stylesheet" href="/css/vendors/magnific-popup.css" />
          {/* public assets end */}
          <style>{`
            .contact-us-button {
              position: fixed;
              bottom: 20px; /* Distance from bottom */
              right: 20px;  /* Distance from right */
              background-color: #FF7F50; /* Updated background color */
              color: #000; /* Font color */
              width: 70px; /* Increased size for larger button */
              height: 70px;
              border-radius: 50%; /* Fully rounded button */
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
              z-index: 1000;
              font-size: 32px; /* Increased icon size */
              transition: background-color 0.3s ease, transform 0.2s ease;
            }
            .contact-us-button:hover {
              background-color: #FF7F50; /* Slightly darker hover color */
              transform: scale(1.1); /* Scale up on hover */
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Contact Us Button */}
          <Link href="/contact" className="contact-us-button" title="Contact Us">
          <i className="fas fa-user"></i>

          </Link>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
