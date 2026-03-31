import { useState } from "react";
import { products } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const product = products.find((p) => p.id === selectedProduct);

  return (
    <section id="products" className="container mx-auto min-h-screen flex flex-col justify-center gap-6 md:gap-8 px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Imprescindibles de BlakIA
        </h2>
        <Button className="font-semibold btn-principal px-6 md:px-8 py-2 rounded-full hover:bg-blakia-brown/90 text-sm md:text-base">
          Ver todo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-0">
        {products.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-[#5D4E37]/30 gap-4"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-[#5D4E37]/20">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="rounded-2xl"
                />
              </div>

              <div className="flex flex-col dark:text-blakia-bone-dark">
                <h3 className="font-semibold text-xl md:text-2xl">{item.name}</h3>
                <p className="font-semibold text-base md:text-lg">{item.description}</p>
              </div>
            </div>

            <Button
              onClick={() => setSelectedProduct(item.id)}
              className="btn-principal px-4 md:px-6 py-1.5 rounded-full text-sm shadow-md hover:bg-blakia-brown/90 w-full sm:w-auto"
            >
              Saber más
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="w-[calc(100%-1rem)] max-w-full sm:max-w-5xl bg-white p-3 py-8 sm:p-8 md:p-12 lg:p-20 rounded-xl">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-blakia-dark" />
          </button>
          <DialogHeader>
            <div className="flex flex-row items-start sm:items-center gap-2 md:gap-4">
              {product && (
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl"
                />
              )}
              <div className="space-y-1 md:space-y-6 text-start">
                <div>
                  <DialogTitle className="text-xl sm:text-3xl md:text-4xl font-semibold text-blakia-dark">{product?.name}</DialogTitle>
                  <DialogDescription className="text-md sm:text-xl md:text-2xl font-semibold text-[#6F6F6E]">
                    {product?.description}
                  </DialogDescription>
                </div>

                <button className="border rounded-full px-4 py-1 text-white font-semibold bg-blakia-teal text-sm md:text-base">
                  Inicia sesion para saber más
                </button>
              </div>
            </div>
          </DialogHeader>

          <div className="pt-4 space-y-4 border-t-2 border-[#B1B1B1]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#B1B1B1] font-semibold">
              <div className="flex flex-col items-center flex-1 px-2">
                <p className="text-xs sm:text-sm">PRECIO</p>
                <p className="text-base sm:text-lg text-[#6F6F6E]">00,00</p>
                <p className="text-xs sm:text-sm">EUROS</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p className="text-xs sm:text-sm">INSTALADO EN</p>
                <p className="text-base sm:text-lg text-[#6F6F6E]">777</p>
                <p className="text-xs sm:text-sm">EMPRESAS</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p className="text-xs sm:text-sm">IDIOMA</p>
                <p className="text-base sm:text-lg text-[#6F6F6E]">ES</p>
                <p className="text-xs sm:text-sm">ESPAÑOL</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p className="text-xs sm:text-sm">TAMAÑO</p>
                <p className="text-base sm:text-lg text-[#6F6F6E]">XX</p>
                <p className="text-xs sm:text-sm">GB</p>
              </div>
            </div>

            <div>
              Imagenes
            </div>

            <div>
              <p className="text-blakia-dark text-justify max-w-2xl text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi officiis at tenetur alias ducimus nisi molestias repellendus dolores, odit odio ipsam quod officia, excepturi eius ad veniam sapiente pariatur!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
