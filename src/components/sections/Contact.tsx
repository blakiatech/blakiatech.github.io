import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react"; // Iconos más limpios

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://n8n-main-instance-production-96ac.up.railway.app/webhook/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        formRef.current?.reset(); // Limpia el formulario automáticamente
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-muted/30">
      <div className="container max-w-xl mx-auto px-4">
        <Card className="border-none shadow-2xl bg-card overflow-hidden">
          {/* Barra decorativa superior para darle un toque premium */}
          <div className="h-2 bg-primary w-full" />
          
          <CardHeader className="text-center space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold tracking-tight">Hablemos de tu proyecto</CardTitle>
            <CardDescription className="text-base">
              Cuéntanos tu idea y nuestro equipo de expertos en IA te contactará en menos de 24h.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            {status === 'success' ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">¡Recibido!</h3>
                <p className="text-muted-foreground max-w-[280px] mx-auto">
                  Hemos enviado tu propuesta a nuestros ingenieros. Estás un paso más cerca de automatizar tu negocio.
                </p>
                <Button variant="outline" onClick={() => setStatus('idle')} className="mt-6">
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-semibold ml-1">
                      Nombre completo
                    </label>
                    <Input 
                      type="text" 
                      name="Nombre" 
                      id="nombre" 
                      placeholder="Ej. Juan Pérez" 
                      required 
                      className="h-12 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold ml-1">
                      Email profesional
                    </label>
                    <Input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="juan@empresa.com" 
                      required 
                      className="h-12 focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="descripcion" className="text-sm font-semibold ml-1">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <Textarea
                      name="Descripción"
                      id="descripcion"
                      placeholder="Ej: Necesito un agente de IA para mi atención al cliente..."
                      className="min-h-[120px] focus-visible:ring-primary resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg h-14 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Propuesta
                    </>
                  )}
                </Button>

                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 border border-red-100 animate-in slide-in-from-top-2">
                    <AlertCircle className="h-4 w-4" />
                    <p className="text-sm font-medium">Algo falló. Por favor, inténtalo de nuevo.</p>
                  </div>
                )}
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}