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
      className={`text-base md:text-lg px-8 py-6 rounded-full ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  );
};
