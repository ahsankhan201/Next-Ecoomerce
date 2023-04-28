import React, { PropsWithChildren, useState } from "react";
import MainBar from "../navBar/MainBar";
import SearchNav from "../navBar/SearchNav";
import MainNavBar from "../MainNavBar";
import Footer from "../footer/Footer";
import Search from "@/pages/search/Search";

const Layout = ({ children }: PropsWithChildren<any>) => {
  const [search, setSearch] = useState<string>("");
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <MainBar />
      <SearchNav search={search} setSearch={setSearch} />
      <MainNavBar />
      {search ? <Search search={search} /> : children}
      <Footer />
    </div>
  );
};

export default Layout;
