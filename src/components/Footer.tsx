import Link from 'next/link'
import React from 'react'
import { IoMail } from 'react-icons/io5'
import { SiGithub, SiX } from 'react-icons/si'

function Footer() {

    const socials = [
        {
            icon: SiGithub,
            link: 'https://github.com/PranavV205'
        },
        {
            icon: SiX,
            link: 'https://x.com/pranav_v707'
        },
        {
            icon: IoMail,
            link: 'mailto:work.pranavv@gmail.com'
        }
    ]

    return (
        <div className='w-full max-w-4xl mx-auto p-6'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-5'>
                    {
                        socials.map((social, index) => (
                            <Link key={index} href={social.link} target='_blank'>
                                <div className='flex items-center gap-2'>
                                    <social.icon className='text-2xl' />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div>
                    <h1>Pranav Vaswani</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer