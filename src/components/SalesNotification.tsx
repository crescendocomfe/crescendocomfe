import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const customers = [
  "Carlos",
  "Mariana",
  "João",
  "Ana Paula",
  "Fernanda",
  "Ricardo",
  "Juliana",
  "Pedro",
  "Camila",
  "Roberto"
];

export const SalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
      setCurrentCustomer(randomCustomer);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Primeira notificação após 3 segundos
    const firstTimer = setTimeout(showNotification, 3000);

    // Notificações subsequentes a cada 15-25 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 animate-slide-up"
      style={{
        animation: 'slideInLeft 0.5s ease-out'
      }}
    >
      <div 
        className="flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm"
        style={{
          backgroundColor: '#2ECC71'
        }}
      >
        <div className="flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <div className="text-white">
          <p className="text-sm">
            <span className="font-bold">{currentCustomer}</span> acabou de comprar
          </p>
        </div>
      </div>
    </div>
  );
};
