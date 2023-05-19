import React, { FC, useState, useMemo } from "react";
import MainNavBar from "../MainNavBar";
import Footer from "../footer/footer";
import Search from "@/components/search/Search";
import SearchBar from "../navBar/searchbar";
import MainBar from './../navBar/mainbar';
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
      <SearchBar search={search} setSearch={setSearch} />
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
