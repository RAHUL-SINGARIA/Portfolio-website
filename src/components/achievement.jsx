import React from 'react';

const Achievements =  () => {
 return (
    <div name='achievement' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Achievement
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-rows-3 gap-3 px-4'>
          <div className='sm:text-left text-1xl '>
            <a href="https://leetcode.com/rahul_singaria/" target="_blank" rel="noopener noreferrer" style={{ color: 'lightseagreen', fontSize: '1.3rem'} }>Leetcode
</a>
--Solved 650+ problems, Max rating of 1665  
          </div>
          <div className='sm:text-left text-1xl '>
            <a href="https://www.hackerrank.com/singariarahul345" target="_blank" rel="noopener noreferrer" style={{ color: 'lightseagreen', fontSize: '1.3rem'} }>Hackerrank
</a>
--CPP 5 stars, problem solving 4 stars
          </div>
          <div className='sm:text-left text-1xl '>
            <a href="https://drive.google.com/file/d/1iN-V06YFUvVDmvBKXOWiqyqQexJ93DjJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'lightseagreen', fontSize: '1.3rem'} }>MnAnalyse
</a>
--won the case study competition organized by finance and economics club IIT Guwahati.
          </div>
          <div className='sm:text-left text-1xl '>
            <a href="https://drive.google.com/file/d/1MHse4oAEwssTjBdOtUI4wvX-yEkN0GZR/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'lightseagreen', fontSize: '1.3rem'} }>Summer Analytics 2021
</a>
--Certificate of Excellence, Summer Analytics, organized by Consulting and Analytics club, IIT Guwahati.
          </div>
          
        </div>
    </div>
  </div>
 );
};

export default Achievements