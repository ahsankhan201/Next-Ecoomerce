import React, { FC, useState, useMemo } from "react";
import MainBar from "../navBar/MainBar";
import SearchNav from "../navBar/SearchNav";
import MainNavBar from "../MainNavBar";
import Footer from "../footer/Footer";
import Search from "@/components/search/Search";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const styles = useMemo(
    () => ({
      container: {
        width: "90%",
        margin: "0 auto",
      },
    }),
    []
  );
  return (
    <div style={styles.container}>
      <MainBar />
      <SearchNav search={search} setSearch={setSearch} />
      <MainNavBar />
      {search ? <Search key={search} search={search} /> : <>{children}</>}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
