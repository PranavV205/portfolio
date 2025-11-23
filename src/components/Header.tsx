'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggleButton'
import { useEffect, useState } from 'react'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full flex flex-row justify-between items-center py-1 px-2 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
            }`}>
            <div className='flex flex-row justify-between items-center'>
                <p className='font-bold'>PV</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link href="#experience">Experience</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Header