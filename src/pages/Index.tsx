import { ContentCard } from "@/components/ContentCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BonusCard } from "@/components/BonusCard";
import { CTAButton } from "@/components/CTAButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
import activity1 from "@/assets/activity-1.png";
import activity2 from "@/assets/activity-2.png";
import activity3 from "@/assets/activity-3.png";
import activity4 from "@/assets/activity-4.png";
import activity5 from "@/assets/activity-5.png";
import quizBiblico from "@/assets/quiz-biblico.png";
import aprendendoOrar from "@/assets/aprendendo-orar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-8 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="text-white space-y-4 md:space-y-5 animate-fade-in">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight uppercase">
                OFERTA EXCLUSIVA
              </h1>
              <p className="text-base md:text-xl lg:text-2xl leading-tight">
                🚀 SEJA DONO(A) DO SEU PRÓPRIO PRODUTO CRISTÃO E LUCRE 100%!Transforme sua fé em renda <span className="font-bold underline">comece hoje mesmo a faturar de R$2.000 a R$5.000 por mês!</span>, <span className="font-bold underline"></span>
              </p> 
              <p className="text-base md:text-lg font-semibold">
                ✨ Tudo 100% pronto para você:
<p className="text-base md:text-lg font-semibold">✅ Página de vendas completa</p>
<p className="text-base md:text-lg font-semibold">✅ Criativos e copys profissionais</p>
<p className="text-base md:text-lg font-semibold">✅ Artes exclusivas para área de membros</p>
<p className="text-base md:text-lg font-semibold">✅ Licença PLR TOTAL — revenda com liberdade total</p>
<p className="text-base md:text-lg font-semibold">✅ Plano de Ação com estratégias de venda testadas e aprovadas</p>

<p className="text-base md:text-lg font-semibold">💡 Comece hoje, multiplique seu propósito e viva do que você acredita!</p>
              </p>
              <CTAButton>
                🟣 QUERO GARANTIR MEU ACESSO AGORA!
              </CTAButton>
            </div>
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Kit Crescendo com Fé - Material Cristão"
                className="rounded-xl md:rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <div className="bg-primary py-2 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center mx-4 md:mx-8 text-white font-semibold text-sm md:text-base">
              <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>ACESSO IMEDIATO</span>
              <CheckCircle className="w-4 h-4 mx-4 md:mx-8 flex-shrink-0" />
              <span>COMPRA SEGURA</span>
            </div>
          ))}
        </div>
      </div>

      {/* Emotional Pain Point Section */}
      <section className="py-10 md:py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 md:mb-10 text-center">
            Apresentamos o CRESCENDO COM FÉ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-success" />
                <p className="text-sm md:text-base">
                  Está cansada de lutar para equilibrar as contas e ver o dinheiro acabar antes do mês?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-success" />
                <p className="text-sm md:text-base">
                  Sonha em ter um produto digital seu, mas se sente perdida sem saber por onde começar?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-success" />
                <p className="text-sm md:text-base">
                  Queria empreender, mas sem abrir mão dos seus valores cristãos e da sua rotina com a família?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-success" />
                <p className="text-sm md:text-base">
                  Já tentou vender algo que não representava sua fé e ainda teve pouco ou nenhum resultado?
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1 text-success" />
                <p className="text-sm md:text-base">
                  Deseja uma fonte de renda que combine com seu propósito, sua fé e sua realidade?
                </p>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg border-l-4 border-accent">
                <p className="text-sm md:text-base font-semibold italic">
                    💡 Se você respondeu "sim" para qualquer uma dessas perguntas, o CRESCENDO COM FÉ foi feito especialmente para você.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={productActivity} 
                alt="Material do Kit Crescendo com Fé"
                className="rounded-xl md:rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-card border-l-4 border-success">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-success" />
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg mb-2 text-foreground">
                    Kit completo de atividades bíblicas
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Em PDF com mais de 400 atividades, criadas por educadores cristãos experientes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-card border-l-4 border-success">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-success" />
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg mb-2 text-foreground">
                    Licença PLR exclusiva
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Personalize tudo no Canva gratuito e revenda com 100% do lucro.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-card border-l-4 border-success">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-success" />
                <div>
                  <h3 className="font-heading font-bold text-base md:text-lg mb-2 text-foreground">
                    Layouts profissionais
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Designs encantadores que tornam o aprendizado mais divertido e atraente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-3">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground px-4">
              📦 O que você vai receber
            </h2>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              + DE 400 atividades Bíblicas para transformar o ensino cristão
            </p>
          </div>


          {/* Activity Showcase Carousel */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg md:text-2xl font-heading font-bold text-center mb-6 text-foreground">
              Exemplos de Atividades Incluídas
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={activity1} alt="Atividade Bíblica 1" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={activity2} alt="Atividade Bíblica 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={activity3} alt="Atividade Bíblica 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={activity4} alt="Atividade Bíblica 4" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={activity5} alt="Atividade Bíblica 5" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={quizBiblico} alt="Quiz Bíblico" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border">
                      <img src={aprendendoOrar} alt="Aprendendo a Orar" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-lg overflow-hidden shadow-card border border-border bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 min-h-[200px]">
                      <p className="text-center font-bold text-foreground text-lg md:text-xl">
                        +400<br />Atividades
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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

      {/* Income Opportunity Section - Destacado */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-br from-accent/20 via-accent/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmMxMDciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-6 md:mb-10 space-y-3 md:space-y-5">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm md:text-base mb-2">
              ⚡ OPORTUNIDADE DE RENDA
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground px-4">
              💰 Transforme Propósito em Renda Extra
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Além de ensinar a fé, você pode criar uma fonte de renda abençoada revendendo o kit
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl md:rounded-2xl shadow-soft p-6 md:p-12 text-center space-y-6 md:space-y-8 border-4 border-accent">
            <div className="space-y-2 md:space-y-3">
              <p className="text-lg md:text-2xl font-heading font-semibold text-white/90">
                Ganhe de
              </p>
              <p className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-none drop-shadow-lg">
                R$ 2.000<br className="md:hidden" /> a R$ 10.000
              </p>
              <p className="text-lg md:text-2xl font-heading font-semibold text-white/90">
                por mês com propósito
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-3xl md:text-5xl font-bold text-accent">100%</div>
                <p className="text-xs md:text-sm text-white/90 mt-1">dos lucros são seus</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-3xl md:text-5xl font-bold text-accent">PLR</div>
                <p className="text-xs md:text-sm text-white/90 mt-1">Licença completa inclusa</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-3xl md:text-5xl font-bold text-accent">∞</div>
                <p className="text-xs md:text-sm text-white/90 mt-1">Vendas ilimitadas</p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 mt-4">
              <p className="text-sm md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
                💡 Imagine ter uma renda extra trabalhando de casa, no seu tempo, fazendo algo que você ama: espalhar a Palavra de Deus! 🙏✨
              </p>
            </div>
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
              title="Colorindo com Propósito"
              description="Páginas para colorir com versículos e personagens bíblicos."
            />
            <BonusCard 
              number={2}
              title="Aprendendo com Alegria"
              description="Atividades interativas que fixam os ensinamentos cristãos."
            />
            <BonusCard 
              number={3}
              title="Aprendendo a orar"
              description="Devocionais infantis com pequenas lições diárias, reflexões e orações."
            />
            <BonusCard 
              number={4}
              title="Quiz Bíblico interativo"
              description="Perguntas divertidas para revisar o aprendizado de forma lúdica."
            />
            <BonusCard 
              number={5}
              title="Vídeos com histórias Bíblicas"
              description="Conteúdo audiovisual para complementar o aprendizado."
            />
            <BonusCard 
              number={6}
              title="Estratégias orgânicas"
              description="Aprenda a divulgar e vender o kit usando métodos gratuitos e eficazes."
            />
            <BonusCard 
              number={7}
              title="Licença de Revenda (PLR)"
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
      <section className="py-10 md:py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-soft p-6 md:p-10 text-center space-y-5 md:space-y-7">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              🔥 Super Promoção por Tempo Limitado!
            </h2>
            <div className="space-y-2 md:space-y-3">
              <p className="text-lg md:text-xl text-muted-foreground line-through">
                De R$97,00
              </p>
              <p className="text-4xl md:text-6xl font-heading font-bold text-primary">
                R$39,90
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-4">
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Acesso vitalício</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">7 dias de garantia</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base">Licença PLR inclusa</span>
              </div>
            </div>
            <CTAButton>
              🟣 QUERO GARANTIR MEU ACESSO AGORA!
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
              💜 BAIXAR O KIT CRESCENDO COM FÉ AGORA
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
