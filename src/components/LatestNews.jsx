import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "./Story";
import { useNavigate } from "react-router-dom";

function LatestNews() {
  const [storyIds, setStoryIds] = useState([]);
  const [page, setPage] = useState(1);
  const [query,setQuery]=useState("");

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  const selectPageHandler = () => {
    if (page >= 16) page = 0;
    setPage(page + 1);
  };

  const navigate = useNavigate();

  return (
    <>
      <table
        cellSpacing={0}
        cellPadding={0}
        border={0}
        className="bg-[#f6f6ef] w-full text-[14px] md:text-[13.3px] gap-8 border-b-2 border-[#ff6600]"
      >
        <tbody>
          <tr className="h-2.5"></tr>
          {storyIds.slice(page * 30 - 30, page * 30).map((storyId, index) => (
            <Story
              key={storyId}
              storyId={storyId}
              index={page * 30 - 30 + index}
            />
          ))}

          <tr className="h-2.5"></tr>

          <tr>
            <td colSpan={2}></td>
            <td>
              <span
                className="cursor-pointer"
                onClick={() => selectPageHandler()}
              >
                More
              </span>
            </td>
          </tr>
          <tr className="h-2.5"></tr>
        </tbody>
      </table>
      <div className="bg-[#f6f6ef] text-center p-[18px]">
        <span className="text-[10.6px] cursor-pointer">
          {" "}
          Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
          Contact
        </span>
        <form
          action=""
          method="get"
          className="pt-[12px] text-[14px] md:text-[13.3px] text-[#828282]"
          onSubmit={() => {
            navigate({
              pathname:"/search",
              search:`?q=${query}`
            });
          }}
        >
          Search: <input type="text" className="border-[1px] border-black focus:outline-none"  onChange={(e)=>setQuery(e.target.value)}/>
        </form>
      </div>
    </>
  );
}

export default LatestNews;
