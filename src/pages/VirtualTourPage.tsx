import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';

export const VirtualTourPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Tour Virtual"
        subtitle="Explora nuestras instalaciones en 360°"
        backgroundImage="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[40vh]"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Recorre nuestras instalaciones"
            subtitle="Descubre cada rincón del Club Social El Estudiante desde cualquier dispositivo"
            center
          />
          
          <div className="mt-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://tour.keepeyeonball.com/Tour/afbb30db-ea6b-4777-a419-bc6b0c0d5efe/Source?sc=186&y=1304&p=9&tz=95&r=0;0&l=0;0&mz=0&d=0&m=0"
                className="w-full h-[90vh] rounded-lg shadow-xl"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-club-dark-green mb-2">Controles</h3>
                <p className="text-gray-600">Usa el ratón o los dedos para moverte y explorar el espacio en 360°</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-club-dark-green mb-2">Zoom</h3>
                <p className="text-gray-600">Utiliza la rueda del ratón o pellizca para acercar o alejar la vista</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-club-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-club-dark-green mb-2">Pantalla completa</h3>
                <p className="text-gray-600">Haz clic en el botón de pantalla completa para una mejor experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};