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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block typewriter-text bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              {slogans[currentSlogan]}
            </span>
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold animate-fade-in">
            <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent tracking-wide animate-pulse">
              Jifunze Leo, Badilisha Kesho Yako
            </span>
          </div>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in">
            Tunatoa mafunzo ya hali ya juu katika maendeleo binafsi, usimamizi wa fedha, 
            maendeleo ya kitaaluma, biashara na teknolojia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground px-10 py-4 text-xl font-bold animate-fade-in rounded-full shadow-glow transition-all duration-300 hover:scale-110 transform hover:shadow-2xl"
            onClick={() => window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank')}
          >
            Jisajili Sasa
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 text-lg font-semibold animate-fade-in rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
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
          border-right: 3px solid hsl(45 100% 60%);
          white-space: nowrap;
          animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
          transform: translateY(0);
          transition: all 0.3s ease-out;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: hsl(45 100% 60%) }
        }

        @media (max-width: 640px) {
          .typewriter-text {
            font-size: 2rem;
            line-height: 1.2;
          }
        }

        @media (max-width: 768px) {
          .typewriter-text {
            font-size: 3rem;
            line-height: 1.1;
          }
        }
        `}
      </style>
    </section>
  );
}