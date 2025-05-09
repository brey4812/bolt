import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { CTASection } from '../components/CTASection';

export const TennisPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Tenis"
        subtitle="Disfruta de nuestras pistas de tenis profesionales"
        backgroundImage="https://images.pexels.com/photos/5739181/pexels-photo-5739181.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[70vh]"
      />

      {/* Main Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                title="Nuestras Pistas de Tenis"
                subtitle="Instalaciones de primer nivel para todos los amantes del tenis"
              />
              <p className="text-gray-600 mb-6">
                El Club Social El Estudiante cuenta con 2 pistas de tenis de tierra batida, mantenidas cuidadosamente a diario para garantizar las mejores condiciones de juego.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestras pistas están diseñadas para ofrecer una experiencia de juego óptima, con el rebote perfecto y la adherencia característica de la tierra batida que permite deslizamientos y reduce el impacto en las articulaciones.
              </p>
              <p className="text-gray-600">
                Además, disponemos de iluminación artificial de alta calidad para que puedas disfrutar de tu deporte favorito incluso en horario nocturno.
              </p>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <img
                src="https://images.pexels.com/photos/2352372/pexels-photo-2352372.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pista de Tenis"
                className="rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-club-dark-green text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">2</span>
                  <span className="text-sm uppercase">Pistas</span>
                </div>
                <div className="bg-club-lime text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">Tierra</span>
                  <span className="text-sm uppercase">Batida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Servicios de tenis"
            subtitle="Todo lo que necesitas para disfrutar al máximo del tenis"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Clases particulares</h3>
              <p className="text-gray-600">
                Clases personalizadas con nuestros profesionales titulados, adaptadas a tu nivel y objetivos. Mejora tu técnica, táctica y condición física.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Clases en grupo</h3>
              <p className="text-gray-600">
                Aprende tenis en un ambiente divertido y social. Grupos reducidos organizados por edades y niveles, desde iniciación hasta competición.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Torneos</h3>
              <p className="text-gray-600">
                Participa en nuestros torneos sociales y federados. Organizamos competiciones para todas las categorías y niveles a lo largo del año.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Tarifas"
            subtitle="Precios competitivos para socios y no socios"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-club-dark-green text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">6€</span>
                  <span className="text-gray-600"> / hora</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Luz incluida</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Reserva anticipada 7 días</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">20% descuento en clases</span>
                  </li>
                </ul>
                <a
                  href="/contacto"
                  className="block text-center bg-club-green hover:bg-club-dark-green text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Reservar pista
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-club-dark-green text-white p-6 text-center">
                <h3 className="text-2xl font-bold">No socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">10€</span>
                  <span className="text-gray-600"> / hora</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Luz incluida</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Reserva anticipada 3 días</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Alquiler de material disponible</span>
                  </li>
                </ul>
                <a
                  href="/contacto"
                  className="block text-center bg-club-green hover:bg-club-dark-green text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Reservar pista
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8224733/pexels-photo-8224733.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Clases de tenis"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <SectionTitle
                title="Escuela de tenis"
                subtitle="Aprende y mejora tu tenis con nuestros profesionales"
              />
              <p className="text-gray-600 mb-6">
                Nuestra escuela de tenis ofrece programas para todas las edades y niveles, desde iniciación para niños y adultos hasta entrenamiento avanzado para competición.
              </p>
              <p className="text-gray-600 mb-6">
                Contamos con profesores titulados y con amplia experiencia que te ayudarán a mejorar tu técnica, táctica y condición física específica para el tenis.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Mini-tenis:</strong> Para niños de 4 a 8 años. Iniciación al tenis de forma lúdica.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Iniciación:</strong> Para niños a partir de 9 años y adultos que empiezan. Aprendizaje de técnicas básicas.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Perfeccionamiento:</strong> Para jugadores con experiencia que quieren mejorar su nivel.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Competición:</strong> Preparación específica para torneos, con entrenamiento técnico, táctico y físico.</span>
                </li>
              </ul>
              <a
                href="/contacto"
                className="btn btn-primary"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Haz de tu pasión por el tenis una realidad"
        subtitle="Únete a nuestra comunidad de amantes del tenis y disfruta de los mejores servicios e instalaciones."
        buttonText="Contáctanos"
        buttonLink="/contacto"
        backgroundImage="https://images.pexels.com/photos/2352372/pexels-photo-2352372.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};