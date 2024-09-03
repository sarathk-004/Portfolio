    import { useState } from 'react';
    import { FaTimes, FaBars } from "react-icons/fa";
    import logo from "../assets/logo.png";
    import { NAVIGATION_LINKS } from "../constants";

    const Navbar = () => {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        };

        const handleLinkClick = (e, href) => {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if(targetElement) {
                const offset = -85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY + offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
            setIsMobileMenuOpen(false);
        };

        return (
            <div>
                <nav className='fixed left-0 right-0 top-4 z-50'>
                    {/* {Desktop Menu} */}
                    <div className="align-middle mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-blue-500/65 py-3 backdrop-blur-lg lg:flex">
                        <div className='items-center flex justify-between gap-8'>
                            <div>
                                <a href="#">
                                    <img src={logo} width={40} alt="logo"/>
                                </a>
                            </div>
                            <div>
                                <ul className='flex items-center gap-4'>
                                    {NAVIGATION_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <a className='text-sm hover:text-blue-500' href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* {Mobile Menu} */}
                    <div className='rounded-lg backdrop-blur-md lg:hidden'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <a href="#">
                                    <img src={logo} width={90} alt="logo" className='m-2'/>
                                </a>
                            </div>
                            <div className='flex items-center'>
                                <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                    {isMobileMenuOpen ? (
                                        <FaTimes className="m-2 h-6 w-5"/>
                                    ) : (
                                        <FaBars className="m-2 h-6 w-5"/>
                                    )}
                                </button>
                            </div>
                        </div>
                        {isMobileMenuOpen && (
                            <ul className='ml-4 mt-5 flex flex-col gap-4 backdrop-blur-md'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className='block w-full text-xl font-semibold' href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        );
    };

    export default Navbar;
