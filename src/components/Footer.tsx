import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-club-dark-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Club Social El Estudiante</h3>
            <p className="mb-4 text-gray-300">
              Tu club social con las mejores instalaciones deportivas y gastronómicas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-club-lime transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-club-lime transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-club-lime transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/el-club" className="text-gray-300 hover:text-club-lime transition-colors">
                  El Club
                </Link>
              </li>
              <li>
                <Link to="/padel" className="text-gray-300 hover:text-club-lime transition-colors">
                  Pádel
                </Link>
              </li>
              <li>
                <Link to="/tenis" className="text-gray-300 hover:text-club-lime transition-colors">
                  Tenis
                </Link>
              </li>
              <li>
                <Link to="/golf" className="text-gray-300 hover:text-club-lime transition-colors">
                  Golf
                </Link>
              </li>
              <li>
                <Link to="/restauracion" className="text-gray-300 hover:text-club-lime transition-colors">
                  Restauración
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-club-lime transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 text-club-lime mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">Avda. de Los Almendros, 38. 10132 Almendralejo, Badajoz</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-club-lime flex-shrink-0" size={18} />
                <a href="tel:+34924670962" className="text-gray-300 hover:text-club-lime transition-colors">
                  924 670 962
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-club-lime flex-shrink-0" size={18} />
                <a href="mailto:info@clubelestudiante.com" className="text-gray-300 hover:text-club-lime transition-colors">
                  info@clubelestudiante.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>9:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden">
          <iframe
            title="Club Social El Estudiante Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2456355962284!2d-6.4134347841899!3d38.8527074505622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd14378f99fffff9%3A0x9c9ae4dbaee8c136!2sClub%20Social%20El%20Estudiante!5e0!3m2!1sen!2ses!4v1665058853301!5m2!1sen!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Club Social El Estudiante. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};