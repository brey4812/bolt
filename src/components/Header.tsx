import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 ${
      isActive
        ? 'text-club-lime font-semibold'
        : scrolled
        ? 'text-gray-800 hover:text-club-lime'
        : 'text-white hover:text-club-yellow'
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white text-gray-900 shadow-md py-3'
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold flex items-center" onClick={closeMenu}>
          <span className={scrolled ? 'text-club-dark-green' : 'text-white'}>
            Club Social
          </span>
          <span className="text-club-lime ml-2">El Estudiante</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <NavLink to="/el-club" className={navLinkClass}>
            El Club
          </NavLink>
          <NavLink to="/padel" className={navLinkClass}>
            Pádel
          </NavLink>
          <NavLink to="/tenis" className={navLinkClass}>
            Tenis
          </NavLink>
          <NavLink to="/golf" className={navLinkClass}>
            Golf
          </NavLink>
          <NavLink to="/restauracion" className={navLinkClass}>
            Restauración
          </NavLink>
          <NavLink to="/tour-virtual" className={navLinkClass}>
            Tour Virtual
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-club-dark-green z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0' }}
      >
        <div className="flex justify-end p-4">
          <button
            className="focus:outline-none text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-8">
          <NavLink
            to="/"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/el-club"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            El Club
          </NavLink>
          <NavLink
            to="/padel"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Pádel
          </NavLink>
          <NavLink
            to="/tenis"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Tenis
          </NavLink>
          <NavLink
            to="/golf"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Golf
          </NavLink>
          <NavLink
            to="/restauracion"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Restauración
          </NavLink>
          <NavLink
            to="/tour-virtual"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Tour Virtual
          </NavLink>
          <NavLink
            to="/contacto"
            className="text-white hover:text-club-lime text-2xl font-semibold"
            onClick={closeMenu}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};