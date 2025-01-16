"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavLink = ({ navItems }) => {

  if(!navItems) return null;

  const [openMenus, setOpenMenus] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(null);
  const dropdownRefs = useRef({});
  const isClickOpenRef = useRef({});

  const pathname = usePathname();
  
  // Updated active state logic
  const pathSegments = pathname?.split("/") || [];
  const isDoorHandlesActive = pathSegments[1] === "handles" && pathSegments[2] === "door-handles";
  const currentSection = pathSegments[1]?.replace(/-/g, ' ')?.toUpperCase();
  const isBrandsSection = currentSection === "BRANDS" || currentSection === "CATALOGUES";

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target)) {
          setOpenMenus(prev => ({ ...prev, [key]: false }));
          isClickOpenRef.current[key] = false;
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (title) => {
    if (navItems.find(item => item.title === title)?.submenu?.length > 0) {
      setHoverMenu(title);
    }
  };

  const handleMouseLeave = (e, title) => {
    const dropdownRef = dropdownRefs.current[title];
    if (!dropdownRef) return;

    const rect = dropdownRef.getBoundingClientRect();
    const isInDropdown = e.clientY >= rect.top && 
                        e.clientY <= rect.bottom && 
                        e.clientX >= rect.left && 
                        e.clientX <= rect.right;
                        
    if (!isInDropdown) {
      setHoverMenu(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setHoverMenu(null);
  };

  const handleClick = (title) => {
    if (navItems && navItems?.find(item => item.title === title)?.submenu?.length > 0) {
      const newState = !openMenus[title];
      setOpenMenus(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        [title]: newState
      }));
      isClickOpenRef.current = {
        ...Object.keys(isClickOpenRef.current).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        [title]: newState
      };
    }
  };

  const isMenuOpen = (title) => {
    return openMenus?.[title] || hoverMenu === title;
  };

  // Updated helper function to determine if an item should be shown as active
  const isItemActive = (item) => {
    if (item.title === "DOOR HANDLES") {
      return isDoorHandlesActive;
    }
    if (item.title === "HANDLES") {
      // Only active for handles pages that are not door-handles
      return currentSection === "HANDLES" && !isDoorHandlesActive;
    }
    if (item.title === "BRANDS") {
      return isBrandsSection;
    }
    return item.title === currentSection;
  };

  return (
    <div className="flex justify-around items-center w-full px-8">
      {navItems && navItems?.length > 0 && navItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          ref={el => dropdownRefs.current[item.title] = el}
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={(e) => handleMouseLeave(e, item.title)}
        >
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handleClick(item.title)}
          >
            <a
              href={item.submenu && item.submenu.length > 0 ? '#' : (item.url || '#')}
              onClick={(e) => {
                if (item.submenu && item.submenu.length > 0) {
                  e.preventDefault();
                }
              }}
              className={`text-sm tracking-widest font-normal flex gap-1
                ${isItemActive(item)
                  ? "bg-[#088080] text-white underline py-1.5 px-3 ease-in-out"
                  : "text-[#088080] hover:text-teal-600 hover:underline"
                }`}
            >
              {item.title}
              {item.submenu && item.submenu.length > 0 && (
                <ChevronDown 
                  className={`h-4 w-4 ${isItemActive(item) ? 'text-white' : 'text-[#088080]'} transition-transform duration-200 ${
                    isMenuOpen(item.title) ? 'rotate-180' : ''
                  }`}
                />
              )}
            </a>
          </div>

          {item.submenu && item.submenu.length > 0 && isMenuOpen(item.title) && (
            <div 
              className="absolute top-full -left-2 pt-2 w-36 z-10"
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="bg-white shadow-lg rounded-md overflow-hidden z-50">
                {item.submenu.map((subitem) => (
                  <a
                    key={subitem.id}
                    href={subitem.url}
                    className={`block px-4 py-2 text-sm text-[#088080] hover:bg-teal-50 hover:text-teal-600
                      ${subitem.title === "Door Handles" && isDoorHandlesActive ? "bg-teal-50 text-teal-600" : ""}`}
                  >
                    {subitem.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLink;

