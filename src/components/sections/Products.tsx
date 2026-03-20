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

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const product = products.find((p) => p.id === selectedProduct);

  return (
    <section id="products" className="container mx-auto min-h-screen flex flex-col gap-8 px-6 py-16">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-4xl">
          Imprescindibles de BlakIA
        </h2>
        <Button className="font-semibold bg-blakia-brown text-white px-8 py-2 rounded-full hover:bg-blakia-brown/90">
          Ver todo
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
        {products.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-between py-4 border-b border-[#5D4E37]/30"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl border border-[#5D4E37]/20">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="rounded-2xl"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-2xl">{item.name}</h3>
                <p className="font-semibold text-lg">{item.description}</p>
              </div>
            </div>

            <Button
              onClick={() => setSelectedProduct(item.id)}
              className="bg-blakia-brown text-white px-6 py-1.5 rounded-full text-sm shadow-md hover:bg-blakia-brown/90"
            >
              Saber más
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-5xl bg-white p-20">
          <DialogHeader>
            <div className="flex items-center gap-4">
              {product && (
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-36 h-36 rounded-xl"
                />
              )}
              <div className="space-y-10">
                <div>  
                  <DialogTitle className="text-4xl font-semibold text-blakia-dark">{product?.name}</DialogTitle>
                  <DialogDescription className="text-2xl font-semibold text-[#6F6F6E]">
                    {product?.description}
                  </DialogDescription>
                </div>

                <button className="border rounded-full px-4 py-1 text-white font-semibold bg-blakia-teal">
                  Inicia sesion para saber más
                </button>
              </div>
            </div>
          </DialogHeader>

          <div className="pt-4 space-y-4 border-t-2 border-[#B1B1B1]">
            <div className="flex justify-around text-[#B1B1B1] font-semibold divide-x">
              <div className="flex flex-col items-center flex-1 px-2">
                <p>PRECIO</p>
                <p className="text-lg text-[#6F6F6E]">00,00</p>
                <p>EUROS</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p>INSTALADO EN</p>
                <p className="text-lg text-[#6F6F6E]">777</p>
                <p>EMPRESAS</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p>IDIOMA</p>
                <p className="text-lg text-[#6F6F6E]">ES</p>
                <p>ESPAÑOL</p>
              </div>

              <div className="flex flex-col items-center flex-1 px-2">
                <p>TAMAÑO</p>
                <p className="text-lg text-[#6F6F6E]">XX</p>
                <p>GB</p>
              </div>
            </div>

            <div>
              Imagenes
            </div>

            <div>
              <p className="text-blakia-dark text-justify max-w-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi officiis at tenetur alias ducimus nisi molestias repellendus dolores, odit odio ipsam quod officia, excepturi eius ad veniam sapiente pariatur!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
