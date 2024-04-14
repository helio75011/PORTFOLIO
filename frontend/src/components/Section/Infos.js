import React from 'react'
// import React1 from './React.png'
// import Node from './node.png'
// import '../../output.css';

const Infos = () => {
  return (
    <div>
        <section className="">
          <div className='relative pt-32 lg:pt-22 lg:pb-16'>
            <div className='relative z-10 container mx-auto px-4'>
              <div className='flex flex-wrap -mx-4 items-center'>
                <div className='w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0'>
                  <div className='max-w-md lg:max-w-none'>
                    <h1 className='font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-black font-semibold leading-none mb-8'>
                      WELCOME TO MY WEBSITE
                    </h1>
                    <p className='text-2xl text-gray-400 mb-8'>
                      <span className='block text-black	'>Here is my repository -</span>
                      <span className='block text-black	'>
                        My last project this year
                      </span>
                    </p>
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
                  </div>
                </div>
                {/* <div className='w-full  px-4'>
                  <div className='w-full flex flex-wrap '>
                    <img className="w-2/4 h-auto" src={React1}/>
                    <img className="" src={Node}/>
                  </div>
                </div> */}
              </div>
            </div>
            <img
              className='absolute bottom-0 left-0 w-full'
              src='casper-assets/headers/bg-bottom-lines.png'
              alt=''
            />
          </div>
        </section>
    </div>
  )
}

export default Infos