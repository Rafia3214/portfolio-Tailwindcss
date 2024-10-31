

import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './projectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='coffee website'
            backgroundImg='/one.png'
            projectUrl='/coffee'
            tech='HTML,CSS'
          />
          <ProjectItem
            title='bakery website'
            backgroundImg='/two.png'
            projectUrl='/bakry'
            tech='Next js'

          />
          <ProjectItem
            title='Food website'
            backgroundImg='/three.png'
            projectUrl='/netflix'
            tech='Next JS'
          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;

