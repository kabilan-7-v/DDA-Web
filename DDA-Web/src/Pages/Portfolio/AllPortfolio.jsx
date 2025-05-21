import React from 'react';
import './AllPortfolio.css';
import arrow from '../../assets/image/arrow-right.png';

const projectData = [
  {
    id: 1,
    title: 'ShopEase',
    category: 'E-Commerce',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg',
    description: 'An online platform to buy products easily.'
  },
  {
    id: 2,
    title: 'MyPortfolio',
    category: 'Personal portfolio',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg',
    description: 'Personal resume and portfolio website.'
  },
  {
    id: 3,
    title: 'EduLearn',
    category: 'Education portfolio',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg',
    description: 'Educational platform for online learning.'
  },
  {
    id: 4,
    title: 'BizBoost',
    category: 'Business Website',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg',
    description: 'Corporate business landing page.'
  },
  {
    id: 5,
    title: 'CartMax',
    category: 'E-Commerce',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg',
    description: 'Another powerful e-commerce solution.'
  }
];

function AllPortfolio({ category }) {
  const filteredProjects =
    category === 'All'
      ? projectData
      : projectData.filter((project) => project.category === category);

  return (
    <div className='all-port-container'>
      <div className='all-port-sec'>
        <div className='container all-portfolio-card'>
          {filteredProjects.map((project) => (
            <div className='pcard1' key={project.id}>
              <div className='all-portfolio-image'>
                <div className='our-all-portfolio-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPortfolio;
