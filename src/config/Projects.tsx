import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Rectify',
    description:
      'Full Stack healthcare platform with AI assistance, appointment booking and seperate dashboards.',
    image: '/project/rectify.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://rectify-black.vercel.app/',
    technologies: [
      { name: 'ExpressJs', icon: <ExpressJs key="expressjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> }
    ],
    github: 'https://github.com/TomarTanishq/Rectify-Ai-powered-healthcare',
    live: 'https://rectify-black.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'Schema.ai ',
    description:
      'Serverless Node.js backend on Vercel, incorporating the Google Gemini API to generate schema-compliant JSON data.',
    image: '/project/schemaai.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://schema-ai-ten.vercel.app/',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> }
    ],
    github: 'https://github.com/TomarTanishq/Schema.ai',
    live: 'https://schema-ai-ten.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Breast Cancer Analysis',
    description:
      'Machine Learning model to accurately classify breast tumors.',
    image: '/project/cancer.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://github.com/TomarTanishq/Breast-Cancer-Detection',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/TomarTanishq/Breast-Cancer-Detection',
    live: '/',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
  }
];
