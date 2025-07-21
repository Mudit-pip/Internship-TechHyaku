import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "whyus", label: "Why Choose Us" },
    { id: "courses", label: "Courses" },
    { id: "kits", label: "Kits" },
    { id: "video", label: "Videos" },
    { id: "achievements", label: "Achievements" },
    { id: "collab", label: "Collaborations" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="border-b border-white text-white bg-white/90 px-6 lg:px-20 py-4 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#2c5f55] font-mono text-xl font-bold flex items-center gap-2">
          TechHyaku
          <img className="h-10" src={Logo} alt="Tech Hyaku Logo" />
        </div>

        {/* Desktop Nav (only for large screens) */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#2c5f55] border-b-2 border-[#2c5f55] pb-1"
                    : "hover:text-[#2c5f55] text-black"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile/Tablet Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-black">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile & Tablet Nav Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-4 px-6 pt-4 pb-6 bg-white/95 rounded-md shadow-xl mt-2 text-sm font-medium text-black animate-fadeIn">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block w-full ${
                  activeSection === item.id
                    ? "text-[#2c5f55] font-semibold"
                    : "hover:text-[#2c5f55]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
