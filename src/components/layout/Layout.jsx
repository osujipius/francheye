import React from "react";
import Header from "../molecules/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="pt-36">{children}</div>
    </>
  );
}
