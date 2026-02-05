import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Loader2, Send, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  if (status === 'success') {
    return (
      <div className="w-full max-w-lg mx-auto min-h-[400px] flex flex-col items-center justify-center text-center p-8 space-y-8 animate-in fade-in zoom-in duration-500 bg-surface/50 backdrop-blur-xl rounded-[2rem] border border-primary/20 shadow-2xl shadow-primary/10">
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-24 h-24 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg text-white">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">¡Mensaje Recibido!</h3>
          <p className="text-muted-foreground text-lg max-w-[300px] mx-auto leading-relaxed">
            Tu solicitud ya está en nuestro sistema. Nos pondremos en contacto contigo en breve.
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setStatus('idle')} 
          className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-border/50 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/10">
        
        {/* Left Side: Context & Info (Decorative) */}
        <div className="lg:col-span-2 bg-muted/30 dark:bg-zinc-950/30 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-border/50 dark:border-white/10 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Respuesta en &lt; 24h
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Empieza tu transformación hoy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Completa el formulario y nuestros especialistas en IA analizarán tu caso gratuitamente.
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-4">
            <div className="flex items-center gap-4 text-sm font-medium text-foreground/80">
              <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span>Auditoría inicial gratuita</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-foreground/80">
              <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <span>Soporte directo por WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:col-span-3 p-8 lg:p-12 bg-background/40">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="nombre" className={cn("text-xs font-semibold uppercase tracking-wider ml-1 transition-colors duration-300", focusedField === 'nombre' ? "text-primary" : "text-muted-foreground")}>
                    Nombre
                  </label>
                  <Input
                    type="text"
                    name="Nombre"
                    id="nombre"
                    required
                    placeholder="Tu nombre"
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField(null)}
                    className="h-14 rounded-2xl bg-muted/20 border-border/50 hover:border-primary/30 focus-visible:ring-primary/20 focus-visible:border-primary transition-all duration-300 text-lg px-5"
                  />
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="email" className={cn("text-xs font-semibold uppercase tracking-wider ml-1 transition-colors duration-300", focusedField === 'email' ? "text-primary" : "text-muted-foreground")}>
                    Email Corporativo
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="nombre@empresa.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="h-14 rounded-2xl bg-muted/20 border-border/50 hover:border-primary/30 focus-visible:ring-primary/20 focus-visible:border-primary transition-all duration-300 text-lg px-5"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="descripcion" className={cn("text-xs font-semibold uppercase tracking-wider ml-1 transition-colors duration-300", focusedField === 'descripcion' ? "text-primary" : "text-muted-foreground")}>
                  Detalles del Proyecto
                </label>
                <Textarea
                  name="Descripción"
                  id="descripcion"
                  required
                  placeholder="Descríbenos brevemente qué procesos te gustaría automatizar..."
                  onFocus={() => setFocusedField('descripcion')}
                  onBlur={() => setFocusedField(null)}
                  className="min-h-[160px] rounded-2xl bg-muted/20 border-border/50 hover:border-primary/30 focus-visible:ring-primary/20 focus-visible:border-primary transition-all duration-300 text-lg p-5 resize-none leading-relaxed"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-16 rounded-2xl text-lg font-bold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-primary-foreground shadow-lg shadow-primary/25 border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 group relative overflow-hidden"
                disabled={status === 'loading'}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl" />
                <span className="relative flex items-center gap-3">
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Procesando solicitud...
                    </>
                  ) : (
                    <>
                      Enviar Propuesta
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </Button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20 animate-in slide-in-from-top-2">
                <AlertCircle className="h-5 w-5" />
                <p className="font-medium">Hubo un error al enviar. Por favor, intenta de nuevo.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
