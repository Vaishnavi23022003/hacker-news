import React from "react";
import { mapTime_tz } from "../utils/mapTime";

function SearchComponent({ component }) {
  return (
    <div className="block [&>div>p>a]:text-[#696969]">
      <div className="hover:cursor-pointer">
        <a href={component.url ? component.url : ""}>{component.title} </a>
        <a
          href={component.url ? component.url : ""}
          className="text-[#696969] hover:underline"
        >
          {component.url ? `(${component.url})` : ""}
        </a>
      </div>
      <span className="text-[10.3px] text-[#828282]">
        {component.points ? `${component.points} point |` : null}
        <a href="#" className="hover:underline">
          {" "}
          {component.author} |
        </a>{" "}
        {mapTime_tz(component.created_at)} ago 
        <a href="#" className="hover:underline">
          {component.num_comments ? ` | ${component.num_comments} comments` : null}
        </a>{" "}
      </span>
      {component.story_text ? (
        <div
          dangerouslySetInnerHTML={{ __html: component.story_text }}
          className="py-2 text-[12px]"
        />
      ) : null}
      {component.comment_text ? (
        <div
          dangerouslySetInnerHTML={{ __html: component.comment_text }}
          className="py-2 text-[12px]"
        />
      ) : null}
    </div>
  );
}

export default SearchComponent;
