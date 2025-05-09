import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { CTASection } from '../components/CTASection';

export const GolfPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Golf"
        subtitle="Disfruta de nuestro campo de golf en un entorno natural incomparable"
        backgroundImage="https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[70vh]"
      />

      {/* Main Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nuestro Campo de Golf"
                subtitle="Un recorrido desafiante y divertido para todos los niveles"
              />
              <p className="text-gray-600 mb-6">
                El Club Social El Estudiante cuenta con un campo de golf de 9 hoyos, diseñado para ofrecer un recorrido técnico y variado que supone un desafío tanto para golfistas experimentados como para principiantes.
              </p>
              <p className="text-gray-600 mb-6">
                Situado en un entorno natural privilegiado, nuestro campo se caracteriza por sus calles bien definidas, sus greenes cuidadosamente mantenidos y sus bunkers estratégicamente ubicados, todo ello rodeado de vegetación autóctona que aporta belleza y dificultad al juego.
              </p>
              <p className="text-gray-600">
                Además del campo, disponemos de una zona de prácticas completa con putting green, chipping area y campo de tiro para que puedas perfeccionar todos los aspectos de tu juego.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/274126/pexels-photo-274126.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Campo de Golf"
                className="rounded-lg shadow-md"
              />
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-club-dark-green text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">9</span>
                  <span className="text-sm uppercase">Hoyos</span>
                </div>
                <div className="bg-club-lime text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">Par 72</span>
                  <span className="text-sm uppercase">Recorrido</span>
                </div>
                <div className="bg-club-gold text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">5.800</span>
                  <span className="text-sm uppercase">Metros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Recorrido del campo"
            subtitle="Conoce en detalle cada uno de los 9 hoyos de nuestro campo"
            center
          />
          <div className="max-w-4xl mx-auto mt-8">
            <img
              src="https://images.pexels.com/photos/114982/pexels-photo-114982.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Mapa del campo de golf"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-club-dark-green mb-3">Hoyos 1-3</h3>
              <p className="text-gray-600">
                Los primeros hoyos te introducen suavemente al campo, con amplias calles y obstáculos estratégicos que premian la precisión.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-club-dark-green mb-3">Hoyos 4-6</h3>
              <p className="text-gray-600">
                La parte central del recorrido aumenta en dificultad, con dogleg pronunciados y obstáculos de agua que requieren estrategia y precisión.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-club-dark-green mb-3">Hoyos 7-9</h3>
              <p className="text-gray-600">
                El final del recorrido ofrece hoyos técnicos con greenes elevados y protegidos por bunkers, que ponen a prueba tu habilidad hasta el último putt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Servicios de golf"
            subtitle="Todo lo que necesitas para disfrutar al máximo de tu deporte favorito"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Escuela de golf</h3>
              <p className="text-gray-600">
                Clases particulares y en grupo para todos los niveles, impartidas por profesionales titulados con amplia experiencia en la enseñanza del golf.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Pro Shop</h3>
              <p className="text-gray-600">
                Tienda especializada donde encontrarás todo el equipamiento necesario para la práctica del golf: palos, bolas, guantes, ropa técnica y accesorios.
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
                Organizamos competiciones sociales y federadas a lo largo de todo el año, para todos los niveles y categorías de hándicap.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Alquiler de material</h3>
              <p className="text-gray-600">
                Servicio de alquiler de palos, carritos manuales y eléctricos, y buggies para que disfrutes del campo sin preocupaciones.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Zona de prácticas</h3>
              <p className="text-gray-600">
                Completa zona de entrenamiento con campo de tiro, putting green y chipping area para que puedas mejorar todos los aspectos de tu juego.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Casa club</h3>
              <p className="text-gray-600">
                Espacio exclusivo para golfistas con vestuarios, cafetería, restaurante y terraza con vistas al campo, ideal para relajarse después de la partida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Tarifas"
            subtitle="Precios competitivos para socios y no socios"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-club-dark-green text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Green Fee Socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">15€</span>
                  <span className="text-gray-600"> / recorrido</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">9 hoyos (18 hoyos: 25€)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye acceso a zona de prácticas</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Reserva prioritaria</span>
                  </li>
                </ul>
                <a
                  href="/contacto"
                  className="block text-center bg-club-green hover:bg-club-dark-green text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Reservar
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-club-lime transform scale-105 md:scale-100 md:transform-none">
              <div className="bg-club-lime text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Bono 10 Green Fees</h3>
                <span className="text-sm bg-white text-club-dark-green px-3 py-1 rounded-full inline-block mt-2">
                  Más popular
                </span>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">120€</span>
                  <span className="text-gray-600"> / 10 recorridos</span>
                  <p className="text-gray-500 text-sm mt-1">Solo 12€/recorrido</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">9 hoyos por recorrido</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Validez 6 meses</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye acceso a zona de prácticas</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Transferible entre socios</span>
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
                <h3 className="text-2xl font-bold">Green Fee No Socios</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-club-dark-green">25€</span>
                  <span className="text-gray-600"> / recorrido</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">9 hoyos (18 hoyos: 40€)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Incluye acceso a zona de prácticas</span>
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
                  Reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Descubre la pasión por el golf"
        subtitle="Únete a nuestra comunidad y disfruta de un campo excepcional en un entorno incomparable."
        buttonText="Contáctanos"
        buttonLink="/contacto"
        backgroundImage="https://images.pexels.com/photos/274126/pexels-photo-274126.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};