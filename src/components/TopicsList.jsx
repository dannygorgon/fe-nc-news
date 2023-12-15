import React from "react";
import { Link } from "react-router-dom";

const TopicsList = ({ topics }) => {
  const topicColors = {
    coding: "py-2 px-4 shadow-md no-underline rounded-full bg-slate-400 text-white font-sans font-semibold text-sm border-blue-500 btn-primary hover:text-white hover:bg-red-300 focus:outline-none active:shadow-none mr-2",
    football: "py-2 px-4 shadow-md no-underline rounded-full bg-slate-400 text-white font-sans font-semibold text-sm border-yellow-500 btn-primary hover:text-white hover:bg-yellow-700 focus:outline-none active:shadow-none mr-2",
    cooking: "py-2 px-4 shadow-md no-underline rounded-full bg-slate-400 text-white font-sans font-semibold text-sm border-red-500 btn-primary hover:text-white hover:bg-red-700 focus:outline-none active:shadow-none",
  };

  return (
    <div className="min-h-screen bg-slate-300"> {/* Add your desired background color class here */}
      <div className="flex justify-evenly">
        {topics.map((topic) => {
          const colorClass = topicColors[topic.slug] || "bg-gray-500"; 
          return (
            <div key={topic.slug} className={`topic-bar  mt-3 ${colorClass}`}>
              <Link to={`/topics/${topic.slug}`}>
                {topic.slug}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopicsList;