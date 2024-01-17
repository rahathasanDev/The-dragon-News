/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'react-bootstrap';

const Career = () => {
  // Sample job listings data (replace with your actual data)
  const jobListings = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'City, Country',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      requirements: ['Bachelor\'s degree in Computer Science', 'Experience with React and Node.js', 'Excellent problem-solving skills'],
      applyLink: 'https://your-application-form-url.com/software-engineer'
    },
    // Add more job listings as needed
  ];

  return (
    <Container>
      <h1>Join Our Team!</h1>
      <p>Explore exciting career opportunities with us.</p>

      <div>
        {jobListings.map(job => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            
            <div>
              <h3>Requirements:</h3>
              <ul>
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Career;
