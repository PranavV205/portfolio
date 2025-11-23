import grapedawnLogo from "../../public/grapedawn.jpeg"
import Image, { StaticImageData } from "next/image"

interface JobEntry {
    company: string
    logo: StaticImageData
    role: string
    type: string
    period: string
    location: string
    description: string[]
    isCurrent?: boolean
}

const jobs: JobEntry[] = [
    {
        company: "Grapedawn",
        logo: grapedawnLogo,
        role: "Software Developer Engineer",
        type: "Full-Time",
        period: "Dec 2024 - Dec 2025",
        location: "Pune, India",
        description: [
            "Some points"
        ],
        isCurrent: true,
    },
]

export function WorkExperience() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 text-zinc-100 rounded-xl font-sans selection:bg-white/20">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl text-black dark:text-white">Work Experience</h2>
            </div>

            <div className="flex flex-col gap-12">
                {jobs.map((job, index) => (
                    <div key={index} className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                        {/* Logo Column */}
                        <div className="shrink-0">
                            <div className="h-14 w-14 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-sm transition hover:bg-zinc-800/50">
                                <Image
                                    src={job.logo}
                                    alt={`Logo of ${job.company}`}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="grow pt-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-semibold text-black dark:text-white">{job.company}</h3>
                                    <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400 border border-zinc-700/50">
                                        {job.type}
                                    </span>
                                </div>

                                {/* Desktop Connecting Line */}
                                <div className="hidden sm:block grow mx-4 border-b border-zinc-800/60 relative top-1"></div>

                                <div className="flex flex-col items-start sm:items-end">
                                    <span className="text-sm font-medium text-zinc-400">{job.period}</span>
                                    <span className="text-xs text-zinc-500">{job.location}</span>
                                </div>
                            </div>

                            <div className="text-base font-medium text-zinc-600 dark:text-zinc-400 mb-4">{job.role}</div>

                            <ul className="space-y-3">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
