import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../NewsCard/Newscard';

const Category = () => {
  const {id}=useParams();
  const categoryNews =useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      {id && <h4>This Category Result:{categoryNews.length} </h4>}
      {
        categoryNews.map(news=>
         <Newscard
         key={news._id}
         news={news}></Newscard>)
      }
    </div>
  );
};

export default Category;