import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
