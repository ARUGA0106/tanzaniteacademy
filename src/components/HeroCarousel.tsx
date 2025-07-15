import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function HeroCarousel() {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  const slogans = [
    "Ujuzi wa Kisasa, Maisha ya Ubora",
    "Fungua Milango ya Mafanikio",
    "Jenga Kesho Yako kwa Ujuzi",
    "Badilisha Maisha Yako kwa Elimu",
    "Uongozi wa Kesho Unaanza Leo"
  ];

  const backgroundImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&h=1080"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Carousel className="absolute inset-0 w-full h-full" opts={{ loop: true }}>
        <CarouselContent>
          {backgroundImages.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block typewriter-text">
              {slogans[currentSlogan]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Tunatoa mafunzo ya hali ya juu katika maendeleo binafsi, usimamizi wa fedha, 
            maendeleo ya kitaaluma, biashara na teknolojia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold animate-fade-in"
            onClick={() => window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank')}
          >
            Jisajili Sasa
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold animate-fade-in"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jifunze Zaidi
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>

      <style>
        {`
        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid white;
          white-space: nowrap;
          animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: white }
        }
        `}
      </style>
    </section>
  );
}