"use client";

import { motion } from "framer-motion";

export default function SubHero() {
  return (
    <section
      id="sub-hero"
      className="container mx-auto relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <motion.div
        initial={{ x: "-30vw", y:0, rotate: 0 }}
        animate={{ 
          x: ["-30vw", "30vw", "30vw", "-30vw", "-30vw"], 
          y: [0, 240, 240, 0, 0],
          rotate: [0, 180, 180, 360, 360],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[56%] z-10"
      >
        <div className="w-80">
          <img 
            src="/img/claro/manolapizhumano.png" 
            className="w-full h-full object-cover dark:hidden" 
            alt="Mano Lapiz Humano"
          />
          <img 
            src="/img/oscuro/manolapizhumano_oscuro.png" 
            className="w-full h-full object-cover hidden dark:block" 
            alt="Mano Lapiz Humano"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "30vw", y: 0, rotate: 0 }}
        animate={{ 
          x: ["30vw", "-30vw", "-30vw", "30vw", "30vw"], 
          y: [0, -240, -240, 0, 0],
          rotate: [0, -180, -180, -360, -360],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[24%] z-10"
      >
        <div className="w-86">
          <img 
            src="/img/claro/manolapizrobot.png" 
            className="w-full h-full object-cover dark:hidden" 
            alt="Mano Lapiz Robot"
          />
          <img 
            src="/img/oscuro/manolapizrobot_oscuro.png" 
            className="w-full h-full object-cover hidden dark:block" 
            alt="Mano Lapiz Robot"
          />
        </div>
      </motion.div>

      <div className="container relative z-30 flex flex-col items-center text-center max-w-[180px] md:max-w-xl">
        <p className="font-hastegi text-4xl dark:text-blakia-bone-dark">
          <span className="font-darling text-6xl dark:text-white">P</span>
          otenciando empresas con tecnología punta
        </p>
      </div>
    </section>
  );
}
