import React from 'react';
import myimage from '../assets/me.jpg'


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
           <div>
            <img src={myimage} alt="img" className="rounded-2xl mx-auto w-2/3 md:w-ful" />
           </div>
            <div >
              <p className='text-1xl inline  '>I am a passionate software development enthusiast, equipped with a versatile skillset that demonstrates my prowess in critical thinking, creative problem-solving, and software craftsmanship. My journey in web development has allowed me to sculpt meaningful projects that leave an impact. Proficient in the realm of data structures and algorithms, coupled with my experience in competitive programming, I possess the ability to architect efficient solutions that deliver exceptional outcomes.

Driven by a strong sense of intellectual agility and a knack for rapid problem resolution, I am wholeheartedly drawn to collaborative ventures involving intriguing projects. My enthusiasm for continuous growth propels me to embrace novel challenges, which in turn catalyze my ability to conceive innovative solutions that transcend conventional boundaries.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
