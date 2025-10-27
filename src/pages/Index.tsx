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
import productFeatures from "@/assets/product-features.png";
import productActivity from "@/assets/product-activity.png";
import creatorPhoto from "@/assets/creator-photo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 md:py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Ensine a fé brincando e transforme vidas — inclusive a sua!
              </h1>
              <p className="text-base md:text-lg lg:text-xl opacity-95">
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
                className="rounded-2xl md:rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Pain Point Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                Você sente que está correndo sem sair do lugar?
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground">
                <p>
                  Dias que passam rápido, contas que não param de chegar, e aquela sensação de que falta algo maior…
                </p>
                <p>
                  E se você pudesse unir o propósito de ensinar a fé com uma renda extra que realmente faz diferença?
                </p>
                <p className="text-lg md:text-xl text-primary font-semibold font-heading">
                  O Kit Crescendo com Fé te dá as duas coisas: impacto espiritual e resultado financeiro.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={productActivity} 
                alt="Família preocupada com finanças"
                className="rounded-2xl md:rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <Sprout className="w-12 h-12 md:w-16 md:h-16 mx-auto text-success animate-float" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
            Porque ensinar a fé é a herança mais linda que podemos deixar
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Vivemos tempos em que as telas distraem e o amor de Deus é esquecido no dia a dia. O Kit Crescendo com Fé nasceu para ajudar famílias e educadores a trazerem de volta o verdadeiro propósito: ensinar a Palavra de forma leve, criativa e profunda.
          </p>
          <p className="text-lg md:text-xl text-primary font-semibold font-heading px-4">
            É mais que um material — é uma semente plantada no coração das próximas gerações. 🌱
          </p>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
              📦 O que você vai receber
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Um kit completo para transformar o ensino bíblico
            </p>
          </div>

          <div className="mb-8 md:mb-12">
            <img 
              src={productFeatures} 
              alt="Kit Crescendo com Fé - Materiais inclusos"
              className="rounded-2xl md:rounded-3xl shadow-soft w-full max-w-4xl mx-auto"
            />
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

      {/* Income Opportunity Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-success/10 via-primary/5 to-accent/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
              💰 Transforme Propósito em Renda Extra
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Além de ensinar a fé, você pode criar uma fonte de renda abençoada revendendo o kit
            </p>
          </div>
          
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-soft p-6 md:p-12 text-center space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground">
                Ganhe de
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight">
                R$ 2.000 a R$ 10.000
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground">
                por mês com propósito
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6">
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl md:text-4xl font-bold text-primary">100%</div>
                <p className="text-xs md:text-base text-muted-foreground">dos lucros são seus</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl md:text-4xl font-bold text-primary">PLR</div>
                <p className="text-xs md:text-base text-muted-foreground">Licença completa inclusa</p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl md:text-4xl font-bold text-primary">∞</div>
                <p className="text-xs md:text-base text-muted-foreground">Vendas ilimitadas</p>
              </div>
            </div>

            <p className="text-sm md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto px-4">
              Imagine ter uma renda extra trabalhando de casa, no seu tempo, fazendo algo que você ama: espalhar a Palavra de Deus! 🙏✨
            </p>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
              💰 Bônus Exclusivos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
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

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
              🗣️ O que estão dizendo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Histórias reais de transformação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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

      {/* About Me Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
                Construa um negócio digital rentável no nicho infantil
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">vendendo materiais prontos</span>, sem precisar criar do zero, sem se expor e conquistando vendas diárias!
                </p>
                <p className="text-lg md:text-xl border-l-4 border-primary pl-4 py-2 text-foreground font-semibold">
                  Um método simples e comprovado que tem feito pessoas comuns faturarem de R$100 a R$300 por dia, mesmo começando do zero e sem qualquer experiência.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-up">
              <img 
                src={creatorPhoto} 
                alt="Criadora do Kit Crescendo com Fé"
                className="rounded-2xl md:rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-soft p-6 md:p-12 text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              🔥 Super Promoção por Tempo Limitado!
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground line-through">
                De R$97,00
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary">
                R$39,90
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Entrega imediata</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Licença PLR inclusa</span>
              </div>
            </div>
            <CTAButton>
              🟣 Quero garantir meu acesso agora!
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
          <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary animate-float" />
          <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight px-4">
            "Ensinar a fé é investir no que é eterno.
            <br className="hidden md:block" />
            Comece hoje a multiplicar amor, propósito e esperança.
            <br className="hidden md:block" />
            O futuro da próxima geração começa no seu lar."
          </h2>
          <CTAButton>
            💜 Baixar o Kit Crescendo com Fé agora
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-foreground/5 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
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
