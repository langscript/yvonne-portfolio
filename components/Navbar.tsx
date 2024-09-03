"use client";
import React, {useState} from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Research',
        path: '/research'
    },
    {
        title: 'Teaching',
        path: '/teaching'
    },
    {
        title: 'Miscellaneous',
        path: '/miscellaneous'
    }
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    const handleOpenCV = () => {
        window.open('/yvonne_cv.pdf', '_blank');
    }

    return (
        <nav className={"fixed mx-auto top-0 left-0 right-0 z-10 bg-[#fdf5e2]"}>
            <div className="flex container lg:py-4 flex-wrap justify-between items-center mx-auto px-4 py-2">
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-[#3d405b] text-[#3d405b] hover:text-[#81b29a] hover:border-[#81b29a]"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-[#e07a5f] text-[#e07a5f]"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className={'text-[#3d405b] text-2xl font-bold'}>Yvonne Huijun Zhu</div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                        <li>
                            <div
                                className="block py-2 pl-3 pr-4 text-[#000000] sm:text-xl rounded md:p-0 hover:text-[#e07a5f] hover:underline hover:cursor-pointer"
                                onClick={handleOpenCV}
                            >
                                Resume
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay onClose={() => {
                setNavbarOpen(false)
            }} links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar;