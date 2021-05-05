import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Layout>
        {isLoading ? <LoadingSpinner /> : <Component {...pageProps} />}
      </Layout>
    </>
  );
}

export default MyApp;
