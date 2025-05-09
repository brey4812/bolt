import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { CTASection } from '../components/CTASection';

export const RestaurantPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Restauración"
        subtitle="Disfruta de la mejor gastronomía en un entorno privilegiado"
        backgroundImage="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[70vh]"
      />

      {/* Main Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                title="Nuestro Restaurante"
                subtitle="Una experiencia gastronómica única en el corazón del club"
              />
              <p className="text-gray-600 mb-6">
                El restaurante del Club Social El Estudiante ofrece una experiencia gastronómica completa, con una cocina que combina la tradición y la innovación, utilizando productos de primera calidad y de temporada.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro chef y su equipo elaboran diariamente platos que satisfacen los paladares más exigentes, desde la cocina tradicional española hasta propuestas más contemporáneas, siempre con un toque de autor.
              </p>
              <p className="text-gray-600">
                El restaurante cuenta con un amplio comedor con vistas a las instalaciones deportivas, una terraza para disfrutar en los meses de buen tiempo, y salones privados para eventos y celebraciones.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Restaurante Club Social El Estudiante"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestra Carta"
            subtitle="Una selección de platos elaborados con los mejores productos"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-club-dark-green mb-6 pb-2 border-b border-club-lime">Entrantes</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Jamón ibérico de bellota</h4>
                    <span className="text-club-dark-green font-semibold">22€</span>
                  </div>
                  <p className="text-gray-600">Jamón ibérico de bellota cortado a cuchillo con pan cristal y tomate</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Ensalada de burrata</h4>
                    <span className="text-club-dark-green font-semibold">16€</span>
                  </div>
                  <p className="text-gray-600">Con tomate de temporada, rúcula, piñones y vinagreta de albahaca</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Pulpo a la brasa</h4>
                    <span className="text-club-dark-green font-semibold">19€</span>
                  </div>
                  <p className="text-gray-600">Con parmentier de patata, pimentón de la Vera y aceite de oliva virgen extra</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Croquetas caseras</h4>
                    <span className="text-club-dark-green font-semibold">12€</span>
                  </div>
                  <p className="text-gray-600">De jamón ibérico y boletus (8 unidades)</p>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-club-dark-green mb-6 mt-12 pb-2 border-b border-club-lime">Arroces (mín. 2 personas)</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Paella de marisco</h4>
                    <span className="text-club-dark-green font-semibold">20€/p</span>
                  </div>
                  <p className="text-gray-600">Con gamba roja, cigalas, mejillones y calamar</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Arroz negro</h4>
                    <span className="text-club-dark-green font-semibold">18€/p</span>
                  </div>
                  <p className="text-gray-600">Con sepia, calamar y alioli de azafrán</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Arroz de montaña</h4>
                    <span className="text-club-dark-green font-semibold">18€/p</span>
                  </div>
                  <p className="text-gray-600">Con conejo, pollo, setas y verduras de temporada</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-club-dark-green mb-6 pb-2 border-b border-club-lime">Carnes</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Solomillo de ternera</h4>
                    <span className="text-club-dark-green font-semibold">26€</span>
                  </div>
                  <p className="text-gray-600">Con salsa de foie, patata confitada y verduras salteadas</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Entrecot de vaca madurada</h4>
                    <span className="text-club-dark-green font-semibold">24€</span>
                  </div>
                  <p className="text-gray-600">Con patatas fritas caseras y pimientos del padrón</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Paletilla de cordero</h4>
                    <span className="text-club-dark-green font-semibold">23€</span>
                  </div>
                  <p className="text-gray-600">Asada a baja temperatura con puré de patata trufado</p>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-club-dark-green mb-6 mt-12 pb-2 border-b border-club-lime">Pescados</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Lubina salvaje</h4>
                    <span className="text-club-dark-green font-semibold">24€</span>
                  </div>
                  <p className="text-gray-600">A la plancha con verduras al vapor y salsa de cítricos</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Rodaballo</h4>
                    <span className="text-club-dark-green font-semibold">25€</span>
                  </div>
                  <p className="text-gray-600">Al horno con patatas panaderas y refrito de ajo</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-gray-800">Bacalao confitado</h4>
                    <span className="text-club-dark-green font-semibold">22€</span>
                  </div>
                  <p className="text-gray-600">Con muselina de ajo y pisto manchego</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 italic">Todos nuestros precios incluyen IVA</p>
            <p className="text-gray-500 mt-2">Disponemos de opciones para vegetarianos, veganos y alérgicos (consultar con el personal)</p>
          </div>
        </div>
      </section>

      {/* Daily Menu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Menú diario"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <SectionTitle
                title="Menú diario"
                subtitle="Disfruta de nuestra gastronomía a un precio especial"
              />
              <p className="text-gray-600 mb-6">
                De lunes a viernes al mediodía, ofrecemos un menú diario que cambia semanalmente, elaborado con productos frescos y de temporada, a un precio muy especial.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-club-dark-green mb-4">Menú Ejecutivo - 18€</h4>
                <p className="font-medium text-gray-700 mb-2">Incluye:</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Primer plato (a elegir entre 4 opciones)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Segundo plato (a elegir entre 4 opciones)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Postre (a elegir entre 3 opciones)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-club-lime mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Pan, agua y copa de vino de la casa</span>
                  </li>
                </ul>
                <p className="text-gray-500 italic">El menú cambia semanalmente. Consulta las opciones disponibles llamando al restaurante.</p>
              </div>
              <div className="mt-6">
                <a
                  href="/contacto"
                  className="btn btn-primary"
                >
                  Reservar mesa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Eventos y celebraciones"
            subtitle="El lugar perfecto para tus momentos especiales"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img
                  src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Bodas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">Bodas</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Celebra el día más importante de tu vida en nuestras instalaciones. Ofrecemos espacios al aire libre para la ceremonia y amplios salones para el banquete, con capacidad de hasta 200 invitados.
              </p>
              <a
                href="/contacto"
                className="text-club-green font-medium hover:text-club-lime transition-colors"
              >
                Más información →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img
                  src="https://images.pexels.com/photos/5929/food-vacation-lemon-dessert.jpg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Comuniones y bautizos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">Comuniones y bautizos</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Un entorno perfecto para las celebraciones familiares. Disponemos de menús especiales para comuniones y bautizos, con opciones para niños y adultos, y actividades para los más pequeños.
              </p>
              <a
                href="/contacto"
                className="text-club-green font-medium hover:text-club-lime transition-colors"
              >
                Más información →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img
                  src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Eventos de empresa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">Eventos de empresa</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Organizamos todo tipo de eventos corporativos: reuniones, presentaciones, team building, comidas de empresa... Disponemos de salas equipadas con la última tecnología y servicios de catering a medida.
              </p>
              <a
                href="/contacto"
                className="text-club-green font-medium hover:text-club-lime transition-colors"
              >
                Más información →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Quieres reservar una mesa?"
        subtitle="Disfruta de la mejor gastronomía en un entorno privilegiado."
        buttonText="Reservar ahora"
        buttonLink="/contacto"
        backgroundImage="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};