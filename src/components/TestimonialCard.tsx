import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  testimonial: string;
}

export const TestimonialCard = ({ image, name, role, testimonial }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card shadow-card hover:shadow-soft transition-all duration-300 border border-secondary/40">
      <div className="flex flex-col items-center text-center space-y-4">
        <Quote className="w-8 h-8 text-primary/30" />
        <p className="text-foreground italic">"{testimonial}"</p>
        <div className="flex items-center space-x-3 pt-2">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
          />
          <div className="text-left">
            <p className="font-semibold text-foreground font-heading">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
