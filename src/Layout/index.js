import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
