import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from './uploads/API.webp'
import TINDER from './uploads/TINDER.webp'
import BUDGET from './uploads/BUDGET.webp'
// import '../../output.css';

const Project = () => {

  const [projects, setProjects] = useState([]);
  const [TwoProjects, setTwoProjects] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio-hdb-ae6490f64ef9.herokuapp.com//projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  useEffect(() => {
    axios.get('https://portfolio-hdb-ae6490f64ef9.herokuapp.com//twoProjects')
      .then(response => {
        setTwoProjects(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
        <section className='relative md:py-24 lg:py-32 bg-body overflow-hidden '>
          <div className='relative container mx-auto px-4'>
            <div className='absolute top-0 right-0 w-186 h-186 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl' />
            <div className='relative w-4/5 md:max-w-8xl mx-auto'>
              <div className='text-center mb-14'>
                <h2 className='font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6'>
                  Here are my Projects
                </h2>
                <p className='text-xl text-gray-500'>
                  Mi turpis turpis in justo pellentesque id nibh praesent.
                </p>
              </div>
              {projects.map((project, index) => (
              <div key={index} className='flex flex-wrap items-center -mx-4 mb-16'>
                <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                  <div className='relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden'>
                    <img
                      className='absolute top-0 left-0 w-full h-full'
                      src={API}
                      alt=''
                    />
                    <img
                      className='relative w-87 h-87 rounded-tl-3xl object-cover'
                      src={API}
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='max-w-lg'>
                    <h3 className='font-heading text-4xl lg:text-5xl font-semibold'>
                      {project.title}
                    </h3>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <p className='text-xl tracking-tight'>
                      {project.description}
                    </p>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <a
                      className='group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black text-white bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-full'
                      href={project.githubLink}
                    >
                      <span className='mr-2'>VIEW PROJECT</span>
                      {/* SVG Icon */}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {TwoProjects.map((twoProject, index) => (
              <div key={index} className='flex flex-wrap items-center -mx-4 mb-16'>
                <div className='w-full md:w-1/2 px-4 order-last md:order-first'>
                  <div className='max-w-lg'>
                    <h3 className='font-heading text-4xl lg:text-5xl font-semibold'>
                    {twoProject.title}
                    </h3>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <p className='text-xl tracking-tight'>
                    {twoProject.description}
                    </p>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <a
                      className='group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black text-white bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-full'
                      href={twoProject.githubLink}
                    >
                      <span className='mr-2'>VIEW PROJECTS</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                  <div className='relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 md:ml-auto items-end justify-end rounded-3xl overflow-hidden'>
                    <img
                      className='absolute top-0 left-0 w-full h-full'
                      src={TINDER}
                      alt=''
                    />
                    <img
                      className='relative w-87 h-87 rounded-tl-3xl object-cover'
                      src={TINDER}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              ))}
              <div className='flex flex-wrap items-center -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
                  <div className='relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden'>
                    <img
                      className='absolute top-0 left-0 w-full h-full'
                      src={BUDGET}
                      alt=''
                    />
                    <img
                      className='relative w-87 h-87 rounded-tl-3xl object-cover'
                      src={BUDGET}
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='max-w-lg'>
                    <h3 className='font-heading text-4xl lg:text-5xl font-semibold'>
                      03. Budget Management
                    </h3>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <p className='text-xl tracking-tight'>
                      Our user-friendly interface allows for quick setup, and
                      our dedicated support team is ready to assist you every
                      step of the way.
                    </p>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                    <a
                      className='group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black text-white bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-full'
                      href='#'
                    >
                      <span className='mr-2'>VIEW PROJECTS</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <div className='my-6 h-1 w-full bg-opacity-20' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Project