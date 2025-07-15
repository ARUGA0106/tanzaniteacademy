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
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              {slogans[currentSlogan]}
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold animate-fade-in">
            <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent tracking-wide">
              Jifunze Leo, Badilisha Kesho Yako
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Tunatoa mafunzo ya hali ya juu katika maendeleo binafsi, usimamizi wa fedha, 
            maendeleo ya kitaaluma, biashara na teknolojia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold animate-fade-in rounded-full shadow-medium transition-all duration-300 hover:scale-105 transform hover:shadow-strong w-full sm:w-auto"
            onClick={() => window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank')}
          >
            Jisajili Sasa
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold animate-fade-in rounded-full shadow-medium transition-all duration-300 hover:scale-105 transform hover:shadow-strong w-full sm:w-auto"
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

    </section>
  );
}