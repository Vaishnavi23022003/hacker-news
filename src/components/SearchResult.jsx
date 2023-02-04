import React, { useEffect, useState } from "react";
import { searchDefault } from "../services/hnApi";
import SearchComponent from "./SearchComponent";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

let pQuery = "";

const searchOptions = [
  { value: "stories", label: "Stories" },
  { value: "comments", label: "Comments" },
  { value: "all", label: "All" },
];
const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "date", label: "Date" },
];
const timeOptions = [
  { value: "allTime", label: "All time" },
  { value: "day", label: "Last 24h" },
  { value: "week", label: "Past Week" },
  { value: "month", label: "Past Month" },
  { value: "year", label: "Past Year" },
];

function SearchResult({ query }) {
  const [qResult, setResult] = useState([]);
  const [searchValue, setSearch] = useState("stories");
  const [sortValue, setSort] = useState("popularity");
  const [timeValue, setTime] = useState("allTime");
  const [page, setPage] = useState(1);

  const findResult = () => {
    searchDefault(query, searchValue, sortValue, timeValue, page).then((data) =>
      setResult(data)
    );
  };

  const pageHandler = (pageIdx) => {
    setPage(pageIdx);
  };

  if (pQuery != query) {
    pQuery = query;
    findResult();
  }

  useEffect(() => {
    findResult();
    setPage(1);
  }, [searchValue, sortValue, timeValue]);

  useEffect(() => {
    findResult();
  }, [page]);

  return (
    <div className="bg-[#f6f6ef] p-4 w-screen md:w-full">
      <div className="flex gap-2 items-center [&>select]:text-[#696969] [&>select]:bg-[#f6f6ef] pb-2">
        <label>Search </label>
        <select
          name="search"
          id="search"
          className="border border-[#c3c3c3] p-1 rounded-sm [&>*]:bg-white [&>*]:text-black"
        >
          {searchOptions.map((option, i) => (
            <option
              value={option.value}
              key={i}
              onClick={(e) => {
                setSearch(e.target.value);
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <label> by </label>
        <select
          name="sortBy"
          id="sortBy"
          className="border border-[#c3c3c3] p-1 rounded-sm [&>*]:bg-white [&>*]:text-black"
        >
          {sortOptions.map((option, i) => (
            <option
              value={option.value}
              key={i}
              onClick={(e) => {
                setSort(e.target.value);
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        <label> for </label>
        <select
          name="time"
          id="time"
          className="border border-[#c3c3c3] p-1 rounded-sm [&>*]:bg-white [&>*]:text-black"
        >
          {timeOptions.map((option, i) => (
            <option
              value={option.value}
              key={i}
              onClick={(e) => {
                setTime(e.target.value);
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {qResult != "none"
        ? qResult.map((component, index) => (
            <SearchComponent key={index} component={component} />
          ))
        : "We found no items matching search for this period"}

      <span className="flex item-center place-content-center gap-2 text-[12px] text-[#a2b1c8] p-3 text-center [&>span]:border [&>span]:inline-block [&>span]:py-[7px] [&>span]:px-[10px] [&>span]:cursor-pointer leading-none">
        <span className="border-[#a2b1c8]" onClick={() => pageHandler(1)}>
          <FaAngleDoubleLeft />
        </span>
        {[4, 3, 2, 1].map((i) =>
          i != 0 && page - i > 0 ? (
            <span
              className="border-[#a2b1c8]"
              key={page - i}
              onClick={() => pageHandler(page - i)}
            >
              {page - i}
            </span>
          ) : null
        )}
        {[...Array(3)].map((_, i) =>
          page + i <= 34 ? (
            <span
              className={
                i == 0 ? "text-[#ff742b] border-[#ff742b]" : "border-[#a2b1c8]"
              }
              key={page + i}
              onClick={() => pageHandler(i + page)}
            >
              {i + page}
            </span>
          ) : null
        )}
        <span className="border-[#a2b1c8]" onClick={() => pageHandler(34)}>
          <FaAngleDoubleRight />
        </span>
      </span>
    </div>
  );
}

export default SearchResult;
