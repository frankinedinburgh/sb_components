import Footer from "../Footer";
import Navbar from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="grid">
      <Navbar title={"Strength & Fitness"} hasSubMenu={false} />
      <header>Header</header>
      <main>{children}</main>
      <aside>Right Sidebar</aside>
      <Footer />
    </div>
  );
};
