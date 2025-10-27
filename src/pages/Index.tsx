import { ContentCard } from "@/components/ContentCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BonusCard } from "@/components/BonusCard";
import { CTAButton } from "@/components/CTAButton";
import { 
  BookOpen, 
  Palette, 
  Puzzle, 
  Heart, 
  HelpCircle, 
  Sparkles,
  Instagram,
  Mail,
  Shield,
  CheckCircle,
  Sprout
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                Ensine a fé brincando e transforme vidas — inclusive a sua!
              </h1>
              <p className="text-lg md:text-xl opacity-95">
                O Kit Crescendo com Fé é o material cristão completo para ensinar a Palavra de Deus às crianças de forma divertida, com histórias, atividades e desenhos. E o melhor: você pode revender e lucrar com propósito!
              </p>
              <CTAButton>
                🟣 Quero acessar agora por apenas R$39,90!
              </CTAButton>
            </div>
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Mãe ensinando crianças com a Bíblia"
                className="rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <Sprout className="w-16 h-16 mx-auto text-success animate-float" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Porque ensinar a fé é a herança mais linda que podemos deixar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Vivemos tempos em que as telas distraem e o amor de Deus é esquecido no dia a dia. O Kit Crescendo com Fé nasceu para ajudar famílias e educadores a trazerem de volta o verdadeiro propósito: ensinar a Palavra de forma leve, criativa e profunda.
          </p>
          <p className="text-xl text-primary font-semibold font-heading">
            É mais que um material — é uma semente plantada no coração das próximas gerações. 🌱
          </p>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              📦 O que você vai receber
            </h2>
            <p className="text-lg text-muted-foreground">
              Um kit completo para transformar o ensino bíblico
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentCard 
              icon={BookOpen}
              title="Histórias Bíblicas Ilustradas"
              description="Histórias que encantam e ensinam valores eternos."
            />
            <ContentCard 
              icon={Palette}
              title="Páginas para Colorir"
              description="Com versículos e personagens bíblicos."
            />
            <ContentCard 
              icon={Puzzle}
              title="Atividades Interativas"
              description="Jogos e desafios que fixam os ensinamentos."
            />
            <ContentCard 
              icon={Heart}
              title="Devocionais Infantis"
              description="Pequenas lições diárias com reflexões e orações."
            />
            <ContentCard 
              icon={HelpCircle}
              title="Quiz Bíblico Infantil"
              description="Perguntas divertidas para revisar o aprendizado."
            />
            <ContentCard 
              icon={Sparkles}
              title="Cartões e Recursos Extras"
              description="Materiais imprimíveis para escola dominical ou uso em casa."
            />
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              💰 Bônus Exclusivos
            </h2>
            <p className="text-lg text-muted-foreground">
              Agregamos ainda mais valor ao seu investimento!
            </p>
          </div>
          
          <div className="space-y-6">
            <BonusCard 
              number={1}
              title="Manual do Educador Cristão"
              description="Dicas para ensinar a Bíblia de forma criativa e inspiradora."
            />
            <BonusCard 
              number={2}
              title="Estratégias de Revenda Cristã"
              description="Aprenda a vender o kit no piloto automático e gerar renda com propósito."
            />
            <BonusCard 
              number={3}
              title="Licença de Revenda (PLR Completa)"
              description="Você tem permissão total para revender e lucrar 100%!"
            />
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Sparkles className="w-16 h-16 mx-auto text-primary animate-float" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            💡 Deixe Deus agir através de você!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com o Kit Crescendo com Fé, você não apenas ensina a Palavra — você transforma corações.
          </p>
          <p className="text-xl text-foreground font-semibold">
            Imagine ver crianças orando, aprendendo versículos e crescendo com valores cristãos sólidos…
          </p>
          <p className="text-xl text-primary font-semibold font-heading">
            E ainda poder transformar isso em uma fonte de renda abençoada.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              🗣️ O que estão dizendo
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de transformação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              image={testimonial1}
              name="Camila"
              role="Mãe e educadora cristã"
              testimonial="Meu filho ama as atividades! Finalmente um material que fala de Deus de forma divertida."
            />
            <TestimonialCard 
              image={testimonial2}
              name="Tânia"
              role="Professora infantil"
              testimonial="Uso nas aulas da escolinha dominical e as crianças ficam encantadas!"
            />
            <TestimonialCard 
              image={testimonial3}
              name="Mariana"
              role="Empreendedora cristã"
              testimonial="Vendi mais de 30 kits em 2 semanas. É uma renda com propósito!"
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              🔥 Super Promoção por Tempo Limitado!
            </h2>
            <div className="space-y-4">
              <p className="text-2xl text-muted-foreground line-through">
                De R$97,00
              </p>
              <p className="text-5xl md:text-7xl font-heading font-bold text-primary">
                R$39,90
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 py-6">
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Entrega imediata</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Licença PLR inclusa</span>
              </div>
            </div>
            <CTAButton>
              🟣 Quero garantir meu acesso agora!
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Heart className="w-16 h-16 mx-auto text-primary animate-float" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            "Ensinar a fé é investir no que é eterno.
            <br />
            Comece hoje a multiplicar amor, propósito e esperança.
            <br />
            O futuro da próxima geração começa no seu lar."
          </h2>
          <CTAButton>
            💜 Baixar o Kit Crescendo com Fé agora
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground/5 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Garantia de 7 dias
              </h3>
              <p className="text-muted-foreground text-sm">
                Não gostou? Devolvemos 100% do seu investimento.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Suporte
              </h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>suporte@crescendocomfe.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start space-x-2">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/crescendocomfe2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    @crescendocomfe2
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Segurança
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-success">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Produto Cristão com Propósito</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2024 Kit Crescendo com Fé. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com 💜 para formar a próxima geração na fé.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
