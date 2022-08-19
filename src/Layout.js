import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg"></div>

          <Navbar />
          <Sidebar />

          <div class="main-content">{children}</div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
