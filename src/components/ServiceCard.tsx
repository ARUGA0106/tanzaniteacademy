import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-fade-in"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <CardHeader className="text-center">
        <div className="w-28 h-28 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}