import React from 'react'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import { navItems } from '../constants/data'

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='w-full py-4 lg:py-5 border border-gray-15 bg-gray-10'>
        <div className="container flex items-center justify-between">
            {/* Logo */}
            <a href="#">
                <img src="/images/logo.png" alt="Logo" className='w-[114px] h-[34px]'/>
            </a>

            {/* ---------------------------------------------------------------- */}
            {/* Menu de navigation mobile */}
            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                {/* fermer le menu */}
                <button className='absolute top-10 right-10 ring ring-gray-30' onClick={handleClick}>
                    <RiCloseLine size={30} />
                </button>

                {/* navigation */}
                <ul className='text-center space-y-3.5 text-lg'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} onClick={handleClick} className='hover:text-white transition'>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* bouton de contact */}
                <button className="primary-btn mt-10">Nous contacter</button>
            </nav>

            {/* button de menu*/}
            <button className="lg:hidden" onClick={handleClick}>
                <RiMenuLine size={30} />
            </button>

            {/* ---------------------------------------------------------------- */}
            {/* Menu large */}
            <ul className='max-lg:hidden flex items-center gap-10'>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} className='hover:text-white transition text-lg'>{item.label}</a>
                    </li>
                ))}
            </ul>

            {/* bouton de contact large*/}
            <button className="max-lg:hidden primary-btn">Nous contacter</button>
        </div>

    </header>
    
  )
}

export default Header