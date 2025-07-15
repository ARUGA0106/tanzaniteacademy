import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Maendeleo Binafsi", href: "#services" },
    { name: "Usimamizi wa Fedha", href: "#services" },
    { name: "Maendeleo ya Kitaaluma", href: "#services" },
    { name: "Maendeleo ya Biashara", href: "#services" },
    { name: "Maendeleo ya Teknolojia", href: "#services" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/0afb9488-46a4-44a7-8202-bed986c4e78a.png"
            alt="Tanzanite Skills Academy"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold text-primary">Tanzanite Skills Academy</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  onClick={() => scrollToSection('#hero')}
                >
                  Nyumbani
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Huduma Zetu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => scrollToSection(service.href)}
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  onClick={() => scrollToSection('#contact')}
                >
                  Mawasiliano
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank')}
          >
            Jisajili Sasa
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <div className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/0afb9488-46a4-44a7-8202-bed986c4e78a.png"
                  alt="Tanzanite Skills Academy"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-lg font-bold text-primary">Tanzanite Skills Academy</span>
              </div>
              
              <a
                href="#hero"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  scrollToSection('#hero');
                  setIsOpen(false);
                }}
              >
                Nyumbani
              </a>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-muted-foreground">Huduma Zetu</span>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors pl-4"
                    onClick={() => {
                      scrollToSection(service.href);
                      setIsOpen(false);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  scrollToSection('#contact');
                  setIsOpen(false);
                }}
              >
                Mawasiliano
              </a>
              
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={() => {
                  window.open('https://forms.gle/KmJLgkDqTfaP5VmB8', '_blank');
                  setIsOpen(false);
                }}
              >
                Jisajili Sasa
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}