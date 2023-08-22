import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rahul Singaria, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am an enthusiastic student with a deep-seated passion for the realm of software development. My unwavering focus on mastering data structures and algorithms propels me to create solutions that are not only innovative but also highly efficient. I firmly believe in the transformative potential of software to bring about positive changes in the world.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
