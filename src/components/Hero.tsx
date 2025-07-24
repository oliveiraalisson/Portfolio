
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
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 animate-bounce">
          <BarChart3 className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Database className="h-6 w-6 text-accent" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <TrendingUp className="h-10 w-10 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Oi, eu sou{" "}
            <span className="text-gradient">Alisson Oliveira</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-300">
            Analista de Dados apaixonado por transformar dados em insights valiosos
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Especializado em visualização de dados, criação de dashboards interativos 
            e análises que geram impacto real nos negócios.
          </p>

          <div className="mb-16 animate-fade-in animation-delay-700">
            <p className="text-lg text-muted-foreground font-medium">
              Confira abaixo
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce mx-auto"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
         
      </div>
    </section>
  )
}
