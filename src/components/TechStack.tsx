import { SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si"


function TechStack() {

    const techStack = [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Nest.js", icon: SiNestjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
    ]

    return (
        <div className='w-full max-w-4xl mx-auto p-6'>
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl text-black dark:text-white">Tech Stack</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {techStack.length > 0 && techStack.map(tech => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-2 p-4 md:p-5 lg:p-6 bg-[#fafafa] rounded-xl hover:scale-105 transition-all duration-200 shadow-lg dark:shadow-gray-600">
                        <tech.icon className="text-4xl text-black" />
                        <p className="text-md text-black">{tech.name}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TechStack