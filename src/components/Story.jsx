import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import uparrow from "../img/grayarrow.gif";
import { mapTime } from "../utils/mapTime";

function Story({ storyId, index }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <tr>
        <td className="text-right align-top text-[#828282] pr-[2px]">
          {index + 1}.{" "}
        </td>
        <td className="align-top min-w-[13px] md:min-w-[11px]">
          <img
            src={uparrow}
            alt="uparrow"
            className=" mt-[2px] md:mt-[4.5px] w-[13px] h-[13px] md:w-[11px] md:h-[11px]"
          />
        </td>
        <td className="pl-[2px] md:pl-0">
          <span>
            <a href={story.url} className="visited:text-[#828282]">
              {story.title}
            </a>
            {" "}
            <a
              href={story.url}
              className="text-[9.3px] text-[#828282] hover:underline"
            >
              ({new URL(story.url).hostname})
            </a>
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={2}></td>
        <td className="text-[9.3px] text-[#828282]">
          {story.score} point by{" "}
          <a href="#" className="hover:underline">
            {story.by}
          </a>{" "}
          {mapTime(story.time)} ago |{" "}
          <a href="#" className="hover:underline">
            hide
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            past
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            discuss
          </a>
        </td>
      </tr>
    </>
  ) : null;
}

export default Story;
