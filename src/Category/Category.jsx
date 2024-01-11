import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../NewsCard/Newscard';

const Category = () => {
  const {id}=useParams();
  const categoryNews =useLoaderData();
  return (
    <div>
      <h2>This categoty:{categoryNews.length} </h2>
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