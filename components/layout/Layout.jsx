// Next imports
import Head from "next/head";

//Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//Data
import dataMetatags from "../../data/Layout/dataMetatags.json";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Primary metatags */}
        <title>{dataMetatags.title}</title>
        <meta name="description" content={dataMetatags.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-redlada.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={dataMetatags.url} />
        <meta property="og:title" content={dataMetatags.title} />
        <meta property="og:description" content={dataMetatags.content} />
        <meta property="og:image" content={dataMetatags.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={dataMetatags.url} />
        <meta property="twitter:title" content={dataMetatags.title} />
        <meta property="twitter:description" content={dataMetatags.content} />
        <meta property="twitter:image" content={dataMetatags.image} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
