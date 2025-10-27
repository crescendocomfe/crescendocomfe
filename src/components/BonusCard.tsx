import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

interface BonusCardProps {
  number: number;
  title: string;
  description: string;
}

export const BonusCard = ({ number, title, description }: BonusCardProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-warning/20 to-secondary/20 border-2 border-warning/40 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-warning flex items-center justify-center">
            <Gift className="w-6 h-6 text-warning-foreground" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            🎁 Bônus #{number}: {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
