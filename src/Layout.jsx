import Header from "./Header";
import Footer from "./Footer";
import Bottom from "./Bottom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#232426] text-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Bottom />
    </div>
  );
}
