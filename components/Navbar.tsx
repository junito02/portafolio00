import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import logo from "../public/assets/images/logo01.webp";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    setShowMobileMenu(false);
    setActiveLink(href);

    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "01. About" },
    { href: "#project", label: "03. Project" },
    { href: "#contact", label: "04. Contact" },
  ];

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image className="w-14 rounded-full" src={logo} alt="logo" />
          </motion.div>
        </Link>

        {/* Menu items */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`nav-link flex items-center gap-1 font-medium cursor-pointer duration-300 ${
                  activeLink === link.href
                    ? "text-[#4b64f4]" // Azul para el enlace activo
                    : "text-white hover:text-[#4b64f4]" // Blanco por defecto, azul al pasar el mouse
                }`}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {link.label}
                </motion.li>
              </Link>
            ))}
          </ul>
          <a href="curriculum.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-white text-[13px] border border-white hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Mobile menu */}
        <div
          onClick={() => setShowMobileMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-white cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {showMobileMenu && (
          <div className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMobileMenu(false)}
                className="text-3xl text-white cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <ul className="flex flex-col text-base gap-7">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`nav-link flex items-center gap-1 font-medium cursor-pointer duration-300 ${
                      activeLink === link.href
                        ? "text-[#4b64f4]" // Azul para el enlace activo
                        : "text-white hover:text-[#4b64f4]" // Blanco por defecto, azul al pasar el mouse
                    }`}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.li>
                  </Link>
                ))}
              </ul>
              <a href="curriculum.pdf" target="_blank">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-32 h-10 rounded-md text-white text-[13px] border border-white hover:bg-hoverColor duration-300"
                >
                  Resume
                </motion.button>
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
