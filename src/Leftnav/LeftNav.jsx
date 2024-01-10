import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories,setcategories]=useState([]);
  useEffect (()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setcategories(data))
    .catch(error=>console.log(error))
  },[])
  return (
    <div className='mt-5'>
      <h4>All Category</h4>
      <div className=''>
      {
        categories.map(category=><p
          key={category.id}>
            <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
          
        </p>)
      }
      </div>
    </div>
  );
};

export default LeftNav;