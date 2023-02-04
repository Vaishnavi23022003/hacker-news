import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App flex justify-center font-Verdana overflow-y-hidden">
      <div className="md:w-[84%] md:m-2 md:min-w-[796px] self-auto text-[12px] md:text-[13.3px]">
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route component={Error} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
