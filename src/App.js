import React from "react";
import NavbarMain from "./components/NavbarMain";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <div className="App flex justify-center font-Verdana">
      <div className="md:w-[84%] md:m-2 md:min-w-[796px] self-auto text-[12px] md:text-[13.3px]">
        <NavbarMain />
        <NewsPage />
      </div>
    </div>
  );
}

export default App;
