import { getTopics } from "../utils/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopicsPage = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
      getTopics().then(setTopics);
    }, []);

    


    return ( 
        <div>
            <h1>Topics</h1>
        </div>
     );
}
 
export default TopicsPage;