import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white ">
            <footer className="container mx-auto font-raleway">
                <div className="w-full  mx-auto px-14 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h1 className="flex items-center mb-4 sm:mb-0">
                        <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap py-2 lg:py-0">Drone School</Link>
                        </h1>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0">
                            <li>
                                <Link to="/" className="mr-4 hover:underline md:mr-6">Home</Link>
                            </li>
                            <li>
                                <Link to="/lessons" className="mr-4 hover:underline md:mr-6">Lessons</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
                            </li>
                    </ul>
                </div>
                <hr className="my-6  border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-300 sm:text-center pb-5 md:pb-0">© 2023 <p>Drone School™</p>All Rights Reserved.</span>
            </div>
        </footer>
        </section >
    );
};

export default Footer;