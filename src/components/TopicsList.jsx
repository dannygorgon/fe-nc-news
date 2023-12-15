import React from 'react';
import { Link } from 'react-router-dom';

const TopicsList = ({ topics }) => {
  return (
    <div className="flex justify-evenly">
      {topics.map((topic) => {
return      <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
{topic.slug}
</Link>      })}
    </div>
  );
};

export default TopicsList;