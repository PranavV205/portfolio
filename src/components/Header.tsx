import Link from 'next/link'
import ThemeToggle from './ThemeToggleButton'

function Header() {
    return (
        <nav className='absolute w-full flex flex-row justify-between items-center py-1 px-2'>
            <div className='flex flex-row justify-between items-center'>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link href="/">Experience</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Contact</Link>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Header