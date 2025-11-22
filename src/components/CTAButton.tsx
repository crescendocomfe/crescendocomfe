import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  size?: "default" | "lg";
  className?: string;
}

export const CTAButton = ({ children, size = "lg", className }: CTAButtonProps) => {
  const handleClick = () => {
    // Aqui você pode adicionar o link de compra real
    window.open("https://pay.hotmart.com/seu-link-aqui", "_blank");
  };

  return (
    <Button 
      variant="cta" 
      size={size}
      onClick={handleClick}
      className={`text-sm md:text-base lg:text-lg px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 rounded-full w-full md:w-auto ${className}`}
    >
      <span className="flex-1 text-center">{children}</span>
      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
    </Button>
  );
};
