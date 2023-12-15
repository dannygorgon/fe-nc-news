import React, { useState, useEffect } from 'react';
import { getTopics } from "../utils/api";
import TopicsList from '../TopicsList';
import LoadSpinner from '../LoadSpinner';


const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadSpinner />;
  }

  return  <div className=" ">
 
  <TopicsList topics={topics} />;
</div>
};

export default TopicsPage;