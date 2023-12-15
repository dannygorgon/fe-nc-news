import React from "react";
import { Link } from "react-router-dom";

const TopicsList = ({ topics }) => {
  const topicColors = {
    coding: "py-2 px-4 shadow-md no-underline rounded-full bg-red-800 text-white font-sans font-semibold text-sm border-blue-500 btn-primary hover:text-white hover:bg-blue-700 focus:outline-none active:shadow-none mr-2",
    football: "py-2 px-4 shadow-md no-underline rounded-full bg-red-800 text-white font-sans font-semibold text-sm border-yellow-500 btn-primary hover:text-white hover:bg-yellow-700 focus:outline-none active:shadow-none mr-2",
    cooking: "py-2 px-4 shadow-md no-underline rounded-full bg-red-800 text-white font-sans font-semibold text-sm border-red-500 btn-primary hover:text-white hover:bg-red-700 focus:outline-none active:shadow-none",

  };

  return (
    <div className="flex justify-evenly">
      {topics.map((topic) => {
        const colorClass = topicColors[topic.slug] || "bg-gray-500"; 
        return (
          <div key={topic.slug} className={`topic-bar ${colorClass}`}>
            <Link to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>

            
          </div>
        );
      })}

    </div>
  );
};

export default TopicsList;