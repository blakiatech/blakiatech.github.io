import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function MyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome to Astro + shadcn/ui</CardTitle>
        <CardDescription>A modern and performant landing page.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a sample card with shadcn/ui components.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>
          <Rocket className="mr-2 h-4 w-4" /> Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
