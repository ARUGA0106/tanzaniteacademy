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

const Index = () => {
  const services = [
    {
      icon: User,
      title: "Maendeleo Binafsi",
      description: "Jifunze mbinu za kuboresha maisha na fikra zako"
    },
    {
      icon: DollarSign,
      title: "Usimamizi wa Fedha",
      description: "Jifunze kudhibiti mapato na matumizi yako"
    },
    {
      icon: GraduationCap,
      title: "Maendeleo ya Kitaaluma",
      description: "Jipatie ujuzi wa kukusaidia kazini na kielimu"
    },
    {
      icon: Briefcase,
      title: "Maendeleo ya Biashara",
      description: "Jua mbinu za kuanzisha na kukuza biashara"
    },
    {
      icon: Laptop,
      title: "Maendeleo ya Teknolojia",
      description: "Jifunze matumizi ya teknolojia katika maisha na kazi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Tanzanite Skills Academy
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light opacity-90">
            Jifunze Leo, Badilisha Kesho Yako
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent-light text-xl px-8 py-6 rounded-full shadow-glow transition-smooth hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            Jisajili Sasa
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Huduma Zetu
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tunatoa mafunzo ya hali ya juu katika maeneo muhimu ya maendeleo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full group-hover:bg-secondary transition-smooth">
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Uko Tayari Kuanza Safari Yako?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Jiunge na maelfu ya wanafunzi waliobadilisha maisha yao kupitia mafunzo yetu ya hali ya juu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light text-xl px-10 py-6 rounded-full shadow-glow transition-bounce hover:scale-110"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Anza Mafunzo
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-smooth"
            >
              Jiunge Nasi Leo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Mawasiliano
            </h2>
            <p className="text-xl text-muted-foreground">
              Tupo hapa kukusaidia kila wakati
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
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
            
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
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
