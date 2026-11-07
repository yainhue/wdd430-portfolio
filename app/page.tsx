import ProjectList from '@/components/ProjectList';
import CatGetter from '@/components/CatGetter';

const projects = [
{
  title: 'CSE341 Project 2',
  description: 'A web application developed for the CSE341 course, focused on backend development, API design, and database integration.',
  technologies: ['Node.js', 'Express', 'MongoDB'],
  link: 'https://github.com/yainhue/cse341-project2'
},
{
  title: 'Anotador de Truco',
  description: 'A score tracking application for the traditional card game Truco, designed to keep track of points during matches.',
  technologies: ['JavaScript', 'HTML', 'CSS'],
  link: 'https://github.com/yainhue/anotador-de-truco'
},
{
  title: 'TimeTracker',
  description: 'A productivity application that helps users track and manage their time spent on tasks and daily activities.',
  technologies: ['C#, Excel'],
  link: 'https://github.com/yainhue/TimeTracker'
},
{
  title: 'JournaLife',
  description: 'A digital journaling application that allows users to record personal entries, thoughts, and daily experiences.',
  technologies: ['JavaScript', 'HTML', 'CSS'],
  link: 'https://github.com/yainhue/JournaLife'
}
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#7073cf]">My Portfolio</h1>
        <p className="text-lg text-[#b5bdf7]">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <div className='flex flex-wrap gap-4 justify-center'>
      <ProjectList projects={projects} />
      <CatGetter width={300}height={450}/>
      </div>
    </main>
  );
}