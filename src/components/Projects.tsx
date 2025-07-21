
import { ExternalLink, Eye, BarChart3, TrendingUp, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Dashboard de Vendas",
      description: "Análise completa de performance de vendas com ao longo do anos, segmento mais lucrativo e tendências dos produtos.",
      icon: BarChart3,
      tags: ["Power BI", "Power Query", "DAX"],
      image: "/placeholder.svg",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7339100190672392193/"
    },
    {
      title: "Desempenho operacional e de Vendas",
      description: "Dashboard interativo para acompanhamento da eficiência operacional, satisfação dos clientes e a rentabilidade da empresa.",
      icon: PieChart,
      tags: ["Power BI", "ETL", "DAX"],
      image: "https://media.licdn.com/dms/image/v2/D5622AQHwFwC2_iYFiA/feedshare-shrink_2048_1536/B56ZeDtGo6G0Aw-/0/1750261329752?e=1755734400&v=beta&t=09drxK9DDFAW_eik7gCk23u5Dn1BvpBbKvTmUBjWD90",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7341128102342729729/"
    },
    {
      title: "Análise de Marketing",
      description: "Visualização de dados de campanhas com indicadores de performance de canais e comportamento do consumidor",
      icon: TrendingUp,
      tags: ["Power BI", "ETL", "DAX"],
      image: "/placeholder.svg",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7345962069323591680/"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Meus Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos meus principais dashboards e análises de dados. 
            Cada projeto representa uma solução única para desafios específicos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-none bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Visualizar
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full gap-2 gradient-primary text-white hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver Dashboard
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
