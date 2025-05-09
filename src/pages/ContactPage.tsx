import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <HeroSection
        title="Contacto"
        subtitle="Estamos a tu disposición para resolver cualquier duda"
        backgroundImage="https://images.pexels.com/photos/4039658/pexels-photo-4039658.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-[60vh]"
      />

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Información de contacto"
                subtitle="Ponte en contacto con nosotros a través de cualquiera de estos medios"
              />
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-club-lime rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Calle del Alto, s/n<br />
                      28108 Alcobendas
                      Madrid, España
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-club-lime rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+34924670962" className="hover:text-club-green transition-colors">
                        924 670 962
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-club-lime rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@clubelestudiante.com" className="hover:text-club-green transition-colors">
                        info@clubelestudiante.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-club-lime rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Horario</h3>
                    <ul className="text-gray-600">
                      <li>Lunes - Viernes: 8:00 - 22:00</li>
                      <li>Sábados: 9:00 - 22:00</li>
                      <li>Domingos: 9:00 - 21:00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-club-dark-green hover:bg-club-lime text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.831c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.189 22 17.052 22 12.061z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-club-dark-green hover:bg-club-lime text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.88 4.88 0 00-1.77 1.153 4.897 4.897 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.91 4.91 0 001.153 1.77 4.901 4.901 0 001.77 1.154c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.88 4.88 0 001.77-1.153 4.897 4.897 0 001.154-1.77c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.88 4.88 0 00-1.153-1.77 4.897 4.897 0 00-1.77-1.154c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.063a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-club-dark-green hover:bg-club-lime text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0022 5.886a8.319 8.319 0 01-2.356.633 4.052 4.052 0 001.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0015.846 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917-3.41-.167-6.434-1.775-8.457-4.22a3.949 3.949 0 00-.556 2.022 4 4 0 001.826 3.348 4.136 4.136 0 01-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 01-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 01-5.096 1.722A8.51 8.51 0 012 18.13a11.784 11.784 0 006.29 1.805" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                title="Envíanos un mensaje"
                subtitle="Rellena el formulario y te responderemos lo antes posible"
              />
              <div className="bg-white p-8 rounded-lg shadow-md mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Cómo llegar"
            subtitle="Encuentra fácilmente nuestra ubicación"
            center
          />
          <div className="mt-12 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Club Social El Estudiante Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.2456355962284!2d-6.4134347841899!3d38.8527074505622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd14378f99fffff9%3A0x9c9ae4dbaee8c136!2sClub%20Social%20El%20Estudiante!5e0!3m2!1sen!2ses!4v1665058853301!5m2!1sen!2ses"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-club-dark-green mb-6">Cómo llegar desde:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Desde Mérida</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Toma la A-66 dirección Sevilla.</li>
                  <li>Sigue por la A-66 durante aproximadamente 30 km.</li>
                  <li>Toma la salida hacia Almendralejo.</li>
                  <li>En la rotonda, toma la segunda salida.</li>
                  <li>Sigue recto durante 2 km hasta llegar a la Avda. de Los Almendros.</li>
                  <li>El club se encuentra en el número 38 a mano derecha.</li>
                </ol>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Desde Badajoz</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Toma la A-5 dirección Madrid.</li>
                  <li>Después de aproximadamente 20 km, toma la salida hacia la A-66 dirección Sevilla.</li>
                  <li>Sigue por la A-66 durante aproximadamente 45 km.</li>
                  <li>Toma la salida hacia Almendralejo.</li>
                  <li>En la rotonda, toma la segunda salida.</li>
                  <li>Sigue recto durante 2 km hasta llegar a la Avda. de Los Almendros.</li>
                  <li>El club se encuentra en el número 38 a mano derecha.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Hazte socio"
                subtitle="Disfruta de todas las ventajas de ser socio del Club Social El Estudiante"
              />
              <p className="text-gray-600 mb-6">
                Ser socio del Club Social El Estudiante te da acceso a todas nuestras instalaciones y servicios, además de beneficiarte de precios especiales en todas nuestras actividades.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Acceso a todas las instalaciones deportivas: pádel, tenis, golf, gimnasio...</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Precios especiales en el alquiler de pistas y green fees</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Descuentos en clases y actividades deportivas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Tarifas reducidas en el restaurante y cafetería</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Prioridad en la reserva de instalaciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-club-lime mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Participación en torneos y eventos exclusivos para socios</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a
                  href="/contacto"
                  className="btn btn-primary text-center"
                >
                  Solicitar información
                </a>
                <a
                  href="/contacto"
                  className="btn btn-secondary text-center"
                >
                  Ver cuotas
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5836818/pexels-photo-5836818.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Hazte socio"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};