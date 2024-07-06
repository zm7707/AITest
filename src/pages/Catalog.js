import React from "react";
import CatalogList from "../components/CatalogList";

const Catalog = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <section className="w-11/12 h-5/6">
        <CatalogList />
      </section>
    </main>
  );
};

export default Catalog;
