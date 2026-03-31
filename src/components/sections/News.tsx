import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { news } from "@/data/news";

export default function News() {
  // Inicializamos con el primer ID para que siempre haya una noticia abierta al cargar
  const [selectedId, setSelectedId] = useState<string>(news[0].id.toString());

  const selectedNews = news.find((n) => n.id.toString() === selectedId);

  return (
    <section
      id="news"
      className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 px-4"
    >
      {/* IZQUIERDA: TEXTO */}
      <div className="flex flex-col gap-1 text-center md:text-start">
        <h2 className="font-hastegi text-4xl md:text-5xl lg:text-6xl dark:text-blakia-bone-dark">
          <span className="font-darling text-5xl md:text-6xl lg:text-7xl dark:text-white">N</span>uevas fronteras
        </h2>

        <p className="font-semibold text-base md:text-xl pt-4">Noticias importantes</p>

        <p className="font-hastegi text-2xl md:text-3xl lg:text-5xl leading-tight dark:text-blakia-bone-dark">
          Nuestra tecnología y visión analizada por los referentes de la industria
        </p>
      </div>

      {/* DERECHA: EL CONTENEDOR ANIMADO */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* RECUADROS DE NAVEGACIÓN (Fondo) */}
        <div className="absolute inset-0 z-0">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id.toString())}
              // Usamos coordenadas manuales para romper el grid y que floten
              style={{
                top: `${[15, 25, 55, 75, 20][index % 5]}%`,
                left: `${[5, 80, 10, 85, 70][index % 5]}%`,
              }}
              className={`absolute w-16 h-24 cursor-pointer border border-[#B1B1B1] rounded-xl transition-all duration-500 bg-white/30 backdrop-blur-[2px]
                ${selectedId === item.id.toString() ? 'opacity-0 scale-50' : 'opacity-40 hover:opacity-100 hover:blur-0'}`}
            />
          ))}
        </div>

        {/* TARJETA PRINCIPAL (Seleccionada) */}
        <AnimatePresence mode="popLayout">
          {selectedId && selectedNews && (
            <motion.div
              key={selectedId}
              layoutId={selectedId}
              className="z-10 w-full max-w-[240px] sm:max-w-[340px] bg-white dark:bg-blakia-dark rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Espacio superior (Imagen o Placeholder) */}
              <div className="w-full" >
                <img src={selectedNews.image} alt={selectedNews.title} />
              </div>

              {/* Franja Marrón Central */}
              <div className="flex flex-col items-center bg-blakia-brown dark:bg-white p-5 gap-4">
                <h3 className="text-sm uppercase leading-tight text-white dark:text-blakia-brown">
                  {selectedNews.title}
                </h3>
                <div className="flex flex-row items-center justify-start w-full gap-2">
                  <div className="flex items-center justify-center bg-white dark:bg-blakia-dark rounded-full p-1">
                    {/* Aquí iría el logo de la empresa de la noticia */}
                    <span className="font-bold text-xl">{selectedNews.logo}</span>
                  </div>
                  <p className="text-[9px] opacity-80 tracking-widest font-semibold text-white dark:text-blakia-brown">
                    COBERTURA INTERNACIONAL
                  </p>
                </div>
              </div>

              {/* Cuerpo de la noticia */}
              <div className="p-4">
                <p className="font-hastegi text-justify text-xl leading-tight tracking-tight">
                  "{selectedNews.summary}"
                </p>
              </div>

              {/* Pie de tarjeta - Ver noticia */}
              <div className="flex flex-col justify-center py-2 px-5 text-right bg-blakia-brown dark:bg-white">
                <a href={selectedNews.url} target="blank" className="text-white dark:text-blakia-brown text-xl font-semibold font-hastegi hover:underline">
                  - Ver noticia
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}