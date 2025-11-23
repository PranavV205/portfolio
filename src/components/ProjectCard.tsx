import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface Project {
    name: string
    ss: StaticImageData
    description: string
    link: string
    stack: IconType[]
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link className='flex' href={project.link} target='_blank'>
            <div className='p-4 rounded-xl flex flex-col gap-2 bg-[#d3d1ce]/65 dark:bg-[#1c1c1b]'>
                <div className='rounded-xl overflow-hidden'>
                    <Image
                        src={project.ss}
                        alt="Bidepuness"
                    />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-lg '>{project.name}</p>
                    {project.stack.length > 0 && (
                        <div className='flex flex-row gap-2'>
                            {project.stack.map((Stack, index) => (
                                <div key={index}>
                                    <Stack className='text-2xl' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className=''>
                    <p className='text-md text-gray-600 dark:text-gray-400'>{project.description}</p>
                </div>
                <div></div>
            </div>
        </Link>
    )
}

export default ProjectCard