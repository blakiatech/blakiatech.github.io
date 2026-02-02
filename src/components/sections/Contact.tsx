import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

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
        formRef.current?.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-xl mx-auto px-4 relative z-10">
        <Card className="border-border shadow-2xl bg-surface/80 backdrop-blur-sm overflow-hidden ring-1 ring-border">
          {/* Decorative top gradient */}
          <div className="h-1 bg-gradient-to-r from-primary to-purple-400 w-full" />

          <CardHeader className="text-center space-y-4 pt-10 pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Hablemos de tu proyecto</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Cuéntanos tu idea y nuestro equipo de expertos en IA te contactará en menos de 24h.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/20 shadow-lg shadow-green-900/20">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">¡Mensaje Recibido!</h3>
                <p className="text-muted-foreground max-w-[300px] mx-auto leading-relaxed">
                  Hemos enviado tu propuesta a nuestros ingenieros. Estás un paso más cerca de automatizar tu negocio.
                </p>
                <Button variant="outline" onClick={() => setStatus('idle')} className="mt-8 border-border text-foreground hover:bg-secondary hover:text-secondary-foreground">
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium ml-1 text-foreground">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      name="Nombre"
                      id="nombre"
                      placeholder="Ej. Juan Pérez"
                      required
                      className="h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1 text-foreground">
                      Email profesional
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="juan@empresa.com"
                      required
                      className="h-12 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="descripcion" className="text-sm font-medium ml-1 text-foreground">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <Textarea
                      name="Descripción"
                      id="descripcion"
                      placeholder="Ej: Necesito un agente de IA para mi atención al cliente..."
                      className="min-h-[140px] bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:border-ring resize-none transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-lg h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 border-0 transition-all duration-300 mt-4"
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
                  <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-red-50 text-red-600 border border-red-200 animate-in slide-in-from-top-2">
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