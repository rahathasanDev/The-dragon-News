import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;

  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeftLong />All News In This Category</Button></Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;