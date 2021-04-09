import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";

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
