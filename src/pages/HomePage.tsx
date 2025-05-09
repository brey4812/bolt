import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { FacilityCard } from '../components/FacilityCard';
import { CTASection } from '../components/CTASection';
import { TestimonialCard } from '../components/TestimonialCard';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Club Social El Estudiante"
        subtitle="Tu exclusivo club deportivo y social"
        backgroundImage="https://images.pexels.com/photos/6572326/pexels-photo-6572326.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                title="Bienvenidos al Club Social El Estudiante"
                subtitle="Un espacio único para el deporte, el ocio y las relaciones sociales"
              />
              <p className="text-gray-600 mb-6">
                El Club Social El Estudiante es un referente en Almendralejo para los amantes del deporte, el ocio y la buena gastronomía. Desde nuestra fundación, nos hemos dedicado a ofrecer las mejores instalaciones y servicios para nuestros socios.
              </p>
              <p className="text-gray-600 mb-6">
                Disponemos de modernas instalaciones deportivas que incluyen pistas de pádel, tenis, campo de golf y mucho más. Además, contamos con un excelente servicio de restauración para que puedas disfrutar de la mejor gastronomía antes o después de tu actividad deportiva.
              </p>
              <a
                href="/el-club"
                className="btn btn-primary"
              >
                Conoce nuestro club
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Club Social El Estudiante"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-10 -left-10 bg-club-lime rounded-lg p-6 shadow-lg hidden md:block">
                  <p className="text-white font-semibold text-xl">30+ años</p>
                  <p className="text-white">de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestras Instalaciones"
            subtitle="Disfruta de las mejores instalaciones deportivas y de ocio"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityCard
              title="Pádel"
              description="Disfruta de nuestras modernas pistas de pádel con las mejores condiciones para tu juego favorito."
              image="https://images.pexels.com/photos/2520244/pexels-photo-2520244.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/padel"
              delay={100}
            />
            <FacilityCard
              title="Tenis"
              description="Nuestras pistas de tenis están preparadas para que disfrutes de este deporte en un entorno inmejorable."
              image="https://images.pexels.com/photos/5739181/pexels-photo-5739181.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/tenis"
              delay={200}
            />
            <FacilityCard
              title="Golf"
              description="Un campo de golf diseñado para jugadores de todos los niveles, en un entorno natural privilegiado."
              image="https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/golf"
              delay={300}
            />
          </div>
          <div className="mt-12 text-center">
            <a href="/el-club" className="btn btn-secondary">
              Ver todas las instalaciones
            </a>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Restaurante Club Social El Estudiante"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <SectionTitle
                title="Restauración"
                subtitle="Disfruta de la mejor gastronomía en nuestro restaurante"
              />
              <p className="text-gray-600 mb-6">
                Nuestro restaurante ofrece una experiencia gastronómica única con platos elaborados con los mejores ingredientes de temporada. Un espacio ideal para disfrutar de una comida o cena en un ambiente agradable y exclusivo.
              </p>
              <p className="text-gray-600 mb-6">
                Contamos con menús diarios, carta y servicios especiales para eventos y celebraciones. ¡Ven a disfrutar de nuestra cocina!
              </p>
              <a
                href="/restauracion"
                className="btn btn-primary"
              >
                Ver nuestra carta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Quieres formar parte de nuestro club?"
        subtitle="Descubre los beneficios de ser socio del Club Social El Estudiante."
        buttonText="Contáctanos"
        buttonLink="/contacto"
        backgroundImage="https://images.pexels.com/photos/6646781/pexels-photo-6646781.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Lo que dicen nuestros socios"
            subtitle="Las opiniones de quienes disfrutan de nuestras instalaciones cada día"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="El Club Social El Estudiante es mi segunda casa. Las instalaciones son excelentes y el personal siempre es amable y atento."
              author="María González"
              position="Socia desde 2015"
              avatarUrl="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard
              quote="Mis hijos disfrutan enormemente de las actividades deportivas del club. Una gran inversión para la familia."
              author="Carlos Rodríguez"
              position="Socio desde 2018"
              avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TestimonialCard
              quote="La calidad de las pistas de pádel es excepcional, y el ambiente del club es inmejorable. Totalmente recomendado."
              author="Laura Martínez"
              position="Socia desde 2019"
              avatarUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};