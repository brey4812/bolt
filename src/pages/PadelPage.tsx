import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { CTASection } from '../components/CTASection';

export const PadelPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Pádel"
        subtitle="Disfruta de nuestras modernas instalaciones de pádel"
        backgroundImage="https://images.pexels.com/photos/2520244/pexels-photo-2520244.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[70vh]"
      />

      {/* Main Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nuestras Pistas de Pádel"
                subtitle="La mejor experiencia de juego en instalaciones de primer nivel"
              />
              <p className="text-gray-600 mb-6">
                El Club Social El Estudiante cuenta con 6 pistas de pádel de cristal de última generación, diseñadas para ofrecer la mejor experiencia de juego tanto para jugadores amateur como para profesionales.
              </p>
              <p className="text-gray-600 mb-6">
                Todas nuestras pistas están equipadas con iluminación LED de alta eficiencia, que garantiza una visibilidad perfecta incluso en horario nocturno, y un sistema de drenaje que permite que las pistas estén operativas incluso después de la lluvia.
              </p>
              <p className="text-gray-600">
                Además, el cerramiento de cristal templado de máxima calidad ofrece una experiencia de juego excepcional, con rebotes precisos y consistentes.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/6551175/pexels-photo-6551175.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pistas de Pádel"
                className="rounded-lg shadow-md"
              />
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-club-dark-green text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">6</span>
                  <span className="text-sm uppercase">Pistas</span>
                </div>
                <div className="bg-club-lime text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">12h</span>
                  <span className="text-sm uppercase">Disponibilidad</span>
                </div>
                <div className="bg-club-gold text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">LED</span>
                  <span className="text-sm uppercase">Iluminación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Características de nuestras pistas"
            subtitle="Todo lo que necesitas para disfrutar al máximo de tu deporte favorito"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Iluminación LED</h3>
              <p className="text-gray-600">
                Sistema de iluminación LED de última generación que garantiza una visibilidad perfecta sin deslumbramientos ni zonas de sombra.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Césped técnico</h3>
              <p className="text-gray-600">
                Superficie de juego profesional con el nivel óptimo de arena que garantiza un bote uniforme de la pelota y minimiza el riesgo de lesiones.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Sistema de reservas</h3>
              <p className="text-gray-600">
                Reserva tu pista de forma fácil y rápida a través de nuestra web o app, con disponibilidad en tiempo real y confirmación instantánea.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Clases y torneos</h3>
              <p className="text-gray-600">
                Programa de clases para todos los niveles y edades, impartidas por profesores titulados, y organización regular de torneos sociales.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Zona de descanso</h3>
              <p className="text-gray-600">
                Área confortable junto a las pistas donde puedes relajarte antes o después de jugar, con servicio de bar y restaurante.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Alquiler de material</h3>
              <p className="text-gray-600">
                Servicio de alquiler de palas y venta de pelotas, por si has olvidado tu equipo o quieres probar un modelo diferente antes de comprarlo.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-club-dark-green text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">8€</span>
                  <span className="text-gray-600"> / hora</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye luz</span>
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
                    <span className="text-gray-600">Descuento en clases y torneos</span>
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
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-club-lime transform scale-105 lg:scale-100 lg:transform-none">
              <div className="bg-club-lime text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Bono 10 horas</h3>
                <span className="text-sm bg-white text-club-dark-green px-3 py-1 rounded-full inline-block mt-2">
                  Más popular
                </span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">70€</span>
                  <span className="text-gray-600"> / 10 horas</span>
                  <p className="text-gray-500 text-sm mt-1">Solo 7€/hora</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye luz</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Validez 3 meses</span>
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
                    <span className="text-gray-600">Transferible a otros socios</span>
                  </li>
                </ul>
                <a
                  href="/contacto"
                  className="block text-center bg-club-lime hover:bg-club-dark-green text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Comprar bono
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-club-dark-green text-white p-6 text-center">
                <h3 className="text-2xl font-bold">No socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">12€</span>
                  <span className="text-gray-600"> / hora</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye luz</span>
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

      {/* CTA Section */}
      <CTASection
        title="¿Quieres mejorar tu nivel de pádel?"
        subtitle="Descubre nuestro programa de clases para todos los niveles y edades."
        buttonText="Infórmate aquí"
        buttonLink="/contacto"
        backgroundImage="https://images.pexels.com/photos/6551175/pexels-photo-6551175.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};