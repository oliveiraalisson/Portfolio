
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">Alisson Oliveira</h3>
            <p className="text-muted-foreground">Analista de Dados</p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground flex items-center">
              Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> e dados
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Alisson Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
