
import { ArrowDown, BarChart3, Database, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation - Clay Style */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 animate-float">
          <BarChart3 className="h-12 w-12 text-primary icon-3d drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-3d">
          <Database className="h-8 w-8 text-secondary icon-3d drop-shadow-lg" />
        </div>
        <div className="absolute bottom-40 left-20 animate-wiggle">
          <TrendingUp className="h-14 w-14 text-tertiary icon-3d drop-shadow-lg" />
        </div>
        <div className="absolute top-60 right-40 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-6 h-6 bg-quaternary rounded-full shadow-clay"></div>
        </div>
        <div className="absolute bottom-60 right-10 animate-bounce-3d" style={{animationDelay: '0.5s'}}>
          <div className="w-8 h-8 bg-success rounded-full shadow-clay"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-scale-in">
            Oi, eu sou{" "}
            <span className="text-gradient">Alisson Oliveira</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in font-body" style={{animationDelay: '300ms'}}>
            Analista de Dados apaixonado por transformar dados em insights valiosos
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in font-body" style={{animationDelay: '500ms'}}>
            Especializado em visualização de dados, criação de dashboards interativos 
            e análises que geram impacto real nos negócios.
          </p>

          <div className="mb-16 animate-fade-in" style={{animationDelay: '700ms'}}>
            <p className="text-lg text-muted-foreground font-medium font-body">
              Confira abaixo
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce-3d mx-auto clay-button bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
          >
            <ArrowDown className="h-6 w-6 icon-3d" />
          </Button>
        </div>
         
      </div>
    </section>
  )
}
