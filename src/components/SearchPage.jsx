import React from "react";
import NavbarSearch from "./NavbarSearch";

function SearchPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("q");
  console.log(query);

  return (
    <>
      <NavbarSearch query={query}/>
    </>
  );
}

export default SearchPage;
