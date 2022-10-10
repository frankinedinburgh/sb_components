import Footer from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div className="grid">
      <header>Header</header>
      <main>{children}</main>
      <aside>Right Sidebar</aside>
      <Footer />
    </div>
  );
};
