import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="text-gray-600 body-font bg-blue-900">
                {/* main */}
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    {/* first column */}
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="text-xl font-bold">E-bharat</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-100">
                            Empowering India through digital solutions.
                        </p>
                    </div>

                    {/* second column */}
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        {/* Quick Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/" className="text-gray-100 hover:text-gray-300">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-gray-100 hover:text-gray-300">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/services" className="text-gray-100 hover:text-gray-300">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-gray-100 hover:text-gray-300">Contact</Link>
                                </li>
                            </nav>
                        </div>

                        {/* Services */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Services</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/web-development" className="text-gray-100 hover:text-gray-300">Web Development</Link>
                                </li>
                                <li>
                                    <Link to="/mobile-app" className="text-gray-100 hover:text-gray-300">Mobile App Development</Link>
                                </li>
                                <li>
                                    <Link to="/digital-marketing" className="text-gray-100 hover:text-gray-300">Digital Marketing</Link>
                                </li>
                                <li>
                                    <Link to="/cloud-services" className="text-gray-100 hover:text-gray-300">Cloud Services</Link>
                                </li>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
                            <nav className="list-none mb-10">
                                <li className="text-gray-100">Email: info@ebharat.com</li>
                                <li className="text-gray-100">Phone: +91 123 456 7890</li>
                                <li className="text-gray-100">Address: 123, E-bharat St, Delhi, India</li>
                            </nav>
                        </div>
                    </div>
                </div>
                
                {/* social media and copy right */}
                <div class="bg-gray-900">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                            © 2024 ebharat —
                            <Link to={'/'} className="text-gray-100 ml-1" rel="noopener noreferrer" target="_blank">
                                @ebharat
                            </Link>
                        </p>
                        
                        {/* social media icons */}
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-100 cursor-pointer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 cursor-pointer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 cursor-pointer">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100 cursor-pointer">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
