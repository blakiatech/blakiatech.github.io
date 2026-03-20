import billy from "@/assets/products/Icono_Billy.svg"

interface Product {
    id: number;
    name: string;
    logo: string;
    description: string
}

export const products: Product[] = [
    {
        id: 1,
        name: "Billy",
        logo: billy.src,
        description: "Automatización de facturas"    
    },
    
];
