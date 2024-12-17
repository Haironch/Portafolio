import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-bgDark overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;