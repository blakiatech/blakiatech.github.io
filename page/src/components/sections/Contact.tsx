
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // This is where you would fetch to your backend
    // For now, we'll just simulate success
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">Contáctanos</CardTitle>
          <CardDescription>¿Tienes una idea o un proyecto en mente? Hablemos.</CardDescription>
        </CardHeader>
        <CardContent>
          {status === 'success' ? (
            <div className="text-center p-8">
              <h3 className="text-xl font-semibold">✅ ¡Mensaje enviado!</h3>
              <p className="text-muted-foreground mt-2">Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="sr-only">Nombre</label>
                <Input type="text" name="nombre" id="nombre" placeholder="Nombre" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input type="email" name="email" id="email" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="descripcion" className="sr-only">Descripción</label>
                <Textarea name="descripcion" id="descripcion" placeholder="Describe tu consulta o proyecto..." />
              </div>
              <Button type="submit" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
