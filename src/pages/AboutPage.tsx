import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="El Club"
        subtitle="Conoce nuestra historia y nuestras instalaciones"
        backgroundImage="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[70vh]"
      />

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nuestra Historia"
                subtitle="Más de 30 años de tradición y excelencia"
              />
              <p className="text-gray-600 mb-6">
                El Club Social El Estudiante nació en 1990 con la visión de crear un espacio único en Almendralejo donde el deporte, el ocio y las relaciones sociales pudieran desarrollarse en un entorno privilegiado.
              </p>
              <p className="text-gray-600 mb-6">
                Lo que comenzó como un pequeño club con instalaciones básicas, ha ido creciendo y evolucionando hasta convertirse en el referente que es hoy. Durante estos años, hemos mantenido nuestro compromiso con la excelencia y la satisfacción de nuestros socios.
              </p>
              <p className="text-gray-600">
                Actualmente, el Club Social El Estudiante es un espacio moderno que combina la tradición con las últimas tendencias, ofreciendo a sus socios unas instalaciones de primer nivel para la práctica deportiva y el disfrute del tiempo libre.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/3727251/pexels-photo-3727251.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Historia del Club"
                className="rounded-lg shadow-md"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-club-dark-green text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">30+</span>
                  <span className="text-sm uppercase">Años de historia</span>
                </div>
                <div className="bg-club-lime text-white p-6 rounded-lg shadow-md text-center">
                  <span className="block text-3xl font-bold mb-2">1000+</span>
                  <span className="text-sm uppercase">Socios activos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestros Valores"
            subtitle="Los pilares que definen nuestra filosofía"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Comunidad</h3>
              <p className="text-gray-600">
                Creamos un ambiente donde todos los socios se sienten parte de una gran familia, fomentando las relaciones sociales y el compañerismo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por ofrecer siempre el máximo nivel en nuestras instalaciones, servicios y atención personalizada a todos nuestros socios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-club-dark-green mb-4">Pasión</h3>
              <p className="text-gray-600">
                Amamos lo que hacemos y lo transmitimos en cada detalle, creando experiencias memorables para todos nuestros socios y visitantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestras Instalaciones"
            subtitle="Descubre todo lo que el Club Social El Estudiante tiene para ofrecerte"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2520244/pexels-photo-2520244.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pistas de Pádel"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Pistas de Pádel</h3>
                <p className="text-gray-600 mb-4">
                  6 pistas de pádel de última generación, con iluminación led y cristales de máxima calidad. Reserva tu pista y disfruta de tu deporte favorito en las mejores condiciones.
                </p>
                <a href="/padel" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5739181/pexels-photo-5739181.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Pistas de Tenis"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Pistas de Tenis</h3>
                <p className="text-gray-600 mb-4">
                  2 pistas de tenis con superficie de tierra batida, perfectamente mantenidas para que disfrutes de tu juego en las mejores condiciones.
                </p>
                <a href="/tenis" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Campo de Golf"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Campo de Golf</h3>
                <p className="text-gray-600 mb-4">
                  Un recorrido de 9 hoyos diseñado para jugadores de todos los niveles, con un entorno natural privilegiado y un mantenimiento impecable.
                </p>
                <a href="/golf" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Restaurante"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Restaurante</h3>
                <p className="text-gray-600 mb-4">
                  Disfruta de la mejor gastronomía en nuestro restaurante, con una carta variada, menú diario y un servicio excelente.
                </p>
                <a href="/restauracion" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Salones para eventos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Salones para eventos</h3>
                <p className="text-gray-600 mb-4">
                  Espacios versátiles para todo tipo de celebraciones, desde reuniones familiares hasta eventos corporativos, con capacidad de hasta 200 personas.
                </p>
                <a href="/el-club" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Gimnasio"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-club-dark-green mb-3">Gimnasio</h3>
                <p className="text-gray-600 mb-4">
                  Moderno gimnasio equipado con máquinas de última generación y zona de peso libre. Abierto todos los días para nuestros socios.
                </p>
                <a href="/el-club" className="text-club-green font-medium hover:text-club-lime transition-colors">
                  Más información →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};