import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"; 

const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Lessons", type: "link", href: "/lessons" },
   
];

const Navbar = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => !curState);
    };

    const closeNav = () => {
        setNavIsVisible(false);
    };

    return (
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 shadow-lg">
            <header className='container sticky top-0 font-raleway text-white mx-auto px-12 flex justify-between py-4 items-center'>
                <div>
                    <Link to="/" className=" font-bold lg:text-4xl">Drone School</Link>
                </div>
                <div className="lg:hidden ">
                    {navIsVisible ? (
                        <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
                    )}
                </div>
                <div className={`${navIsVisible ? "right-0" : "-right-full"} 
                transition-all duration-300 mt-[56px] lg:mt-0 bg-blue-900 lg:bg-transparent flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 -right-full lg:static gap-x-9 items-center`}>
                    <ul className='flex flex-col lg:flex-row items-center gap-y-5 lg:text-black gap-x-8 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <li key={item.name} className='cursor-pointer font-mono text-white z-60 '>
                                {item.type === "link" ? (
                                    <Link to={item.href} onClick={closeNav}>{item.name}</Link> 
                                ) : (
                                    <span>{item.name}</span>
                                )}
                               
                            </li>
                        ))}
                        <Link to="/contact">
                         <button className="bg-white p-2 rounded-lg hover:bg-gray-300">Contact</button>
                         </Link>
                    </ul>
                </div>
            </header>
        </section>
    );
};

export default Navbar;
