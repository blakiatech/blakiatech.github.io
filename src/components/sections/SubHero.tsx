"use client";

import { motion } from "framer-motion";

export default function SubHero() {
  return (
    <section
      id="sub-hero"
      className="container mx-auto relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ x: "-30vw", y:0, rotate: 0 }}
        animate={{ 
          x: ["-30vw", "30vw", "30vw", "-30vw", "-30vw"], 
          y: [0, 210, 210, 0, 0],
          rotate: [0, 180, 180, 360, 360],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[55%] z-10"
      >
        <div className="w-32 md:w-80">
          <img 
            src="/img/manolapizhumano.png" 
            className="w-full h-full object-cover" 
            alt="Mano Lapiz Humano"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "30vw", y: 0, rotate: 0 }}
        animate={{ 
          x: ["30vw", "-30vw", "-30vw", "30vw", "30vw"], 
          y: [0, -210, -210, 0, 0],
          rotate: [0, -180, -180, -360, -360],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[25%] z-10"
      >
        <div className="w-32 md:w-86">
          <img 
            src="/img/manolapizrobot.png" 
            className="w-full h-full object-cover" 
            alt="Mano Lapiz Robot"
          />
        </div>
      </motion.div>

      <div className="container relative z-30 flex flex-col items-center text-center max-w-xl">
        <p className="font-hastegi text-3xl sm:text-4xl md:text-5xl">
          <span className="font-darling text-4xl sm:text-5xl md:text-6xl">P</span>
          otenciando empresas con tecnología punta
        </p>
      </div>
    </section>
  );
}
