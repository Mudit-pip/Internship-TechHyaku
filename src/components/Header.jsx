import React, { useEffect, useState } from "react";
import Logo from '../assets/Logo.png'

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "howitworks", "whyus", "about","achievements", "kits", "contact"];
      const scrollPosition = window.scrollY + 100; // offset for header

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "courses", label: "Courses" },
    { id: "whyus", label: "Why Choose Us" },
    { id: "about", label: "About" },
    { id: "howitworks", label: "How it Works" },
    { id: "collab", label: "Collaborations" },
    { id: "achievements", label: "Achievements" },
    { id: "kits", label: "Kits" },
    { id: "video", label: "Videos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className=" border-b border-white text-white bg-white/90 px-6 md:px-20 py-4 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#2c5f55] font-mono text-xl font-bold flex items-center gap-1">
          Tech Hyaku
          <img className="h-10" src={Logo} alt="" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition duration-500 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#2c5f55] border-b-2 transition duration-1000 border-[#2c5f55] pb-1"
                    : "hover:text-[#2c5f55] transition duration-500 text-black"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;