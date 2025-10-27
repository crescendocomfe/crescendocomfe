import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ContentCard = ({ icon: Icon, title, description }: ContentCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-2 border-secondary/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  );
};
