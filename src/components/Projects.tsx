import { Tabs } from './ui/tabs'
import ProjectCard from './ProjectCard'
import bidepune from '../../public/bidepune.png'
import feasto from '../../public/feasto.png'
import { SiNestjs, SiNextdotjs, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Link from 'next/link'

function ClientProjects() {
    const projects = [
        {
            name: "BIDE Pune",
            ss: bidepune,
            description: "Designed and developed the official website for a distance education company with a focus on clarity and user experience. Built a secure and easy-to-use admin panel for managing website content and form entries.",
            link: "https://bidepune.com",
            stack: [SiNextdotjs, SiTailwindcss, SiSupabase],
        },
        {
            name: "Feasto",
            ss: feasto,
            description: "Built a seamless user onboarding flow with one-click Google Sign-In for faster access. Integrated a secure online payment flow allowing users to purchase and manage meal plan subscriptions.",
            link: "https://feasto.co",
            stack: [SiNextdotjs, SiTailwindcss, SiNestjs],
        },
    ]

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-8'>

            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    )
}

function Projects() {

    const tabs = [
        {
            label: "Client Projects",
            content: (
                <ClientProjects />
            ),
        },
        {
            label: "Personal Projects",
            content: (
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                    Coming soon...
                </p>
            ),
        }
    ]

    return (
        <div className='w-full max-w-4xl mx-auto p-6'>
            <Tabs tabs={tabs} defaultTab={0} />
        </div>
    )
}

export default Projects