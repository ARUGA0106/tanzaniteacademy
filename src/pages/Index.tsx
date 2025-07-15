import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  DollarSign, 
  GraduationCap, 
  Briefcase, 
  Laptop,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      icon: User,
      title: "Maendeleo Binafsi",
      description: "Kuboresha ujuzi wa kujitegemea, kujenga uhakika wa kibinafsi, na kukuza nia za maisha kupitia mbinu za kisayansi za maendeleo ya akili na mwili"
    },
    {
      icon: DollarSign,
      title: "Usimamizi wa Fedha",
      description: "Kujifunza njia sahihi za kupanga bajeti, kuweka akiba, kuanzisha mitaji, na kutumia teknolojia za kifedha kwa maendeleo ya kiuchumi"
    },
    {
      icon: GraduationCap,
      title: "Maendeleo ya Kitaaluma",
      description: "Kupata ujuzi wa hali ya juu katika masomo, utafiti, uandishi wa kitaalamu, na mbinu za kujifunzia kwa ufanisi zaidi"
    },
    {
      icon: Briefcase,
      title: "Maendeleo ya Biashara",
      description: "Kujifunza kuanzisha, kusimamia, na kukuza biashara zindele kupitia mipango ya kibiashara, masoko, na udhibiti wa rasilimali"
    },
    {
      icon: Laptop,
      title: "Maendeleo ya Teknolojia",
      description: "Kutumia teknolojia ya kisasa katika kazi, biashara, na maisha ya kila siku ili kuongeza tija na kuboresha ubora wa maisha"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
              Huduma Zetu
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Tunatoa mafunzo ya hali ya juu katika maeneo muhimu ya maendeleo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Uko Tayari Kuanza Safari Yako?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Jiunge na maelfu ya wanafunzi waliobadilisha maisha yao kupitia mafunzo yetu ya hali ya juu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light text-xl px-10 py-6 rounded-full shadow-glow transition-bounce hover:scale-110 animate-fade-in"
              onClick={() => window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank')}
            >
              Anza Mafunzo
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-smooth animate-fade-in"
              onClick={() => window.open('https://wa.me/255749722722', '_blank')}
            >
              Jiunge Nasi Leo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
              Mawasiliano
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Tupo hapa kukusaidia kila wakati
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">WhatsApp</h3>
                <a 
                  href="https://wa.me/255749722722" 
                  className="text-xl text-secondary hover:text-secondary-light transition-smooth inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0749 722 722
                  <ExternalLink className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full">
                  <Mail className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Barua Pepe</h3>
                <a 
                  href="mailto:info@tanzaniteskills.ac.tz" 
                  className="text-xl text-secondary hover:text-secondary-light transition-smooth inline-flex items-center gap-2"
                >
                  info@tanzaniteskills.ac.tz
                  <ExternalLink className="h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Tanzanite Skills Academy</h3>
            <p className="text-lg opacity-80 mb-6">
              Jifunze Leo, Badilisha Kesho Yako
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="opacity-70">
                &copy; 2024 Tanzanite Skills Academy. Haki zote zimehifadhiwa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;