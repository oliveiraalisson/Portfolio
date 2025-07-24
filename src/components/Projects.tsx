import { ExternalLink, Eye, BarChart3, TrendingUp, PieChart, Activity, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export function Projects() {
  const projects = [
  {
    title: "Dashboard de Vendas",
    description: "Análise completa de performance de vendas com ao longo do anos, segmento mais lucrativo e tendências dos produtos.",
    icon: BarChart3,
    tags: ["Power BI", "Power Query", "DAX"],
    image: "/portfolio/lovable-uploads/0706a983-4968-487d-b5ea-385190de6fbb.png",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7339100190672392193/"
  },
  {
    title: "Desempenho Operacional e de Vendas",
    description: "Dashboard interativo para acompanhamento da eficiência operacional, satisfação dos clientes e a rentabilidade da empresa.",
    icon: PieChart,
    tags: ["Power BI", "ETL", "DAX"],
    image: "/portfolio/lovable-uploads/f5d33aa4-d686-4c76-b9e7-56760425595a.png",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7341128102342729729/"
  },
  {
    title: "Análise de Marketing",
    description: "Visualização de dados de campanhas com indicadores de performance de canais e comportamento do consumidor",
    icon: TrendingUp,
    tags: ["Power BI", "ETL", "DAX"],
    image: "/portfolio/lovable-uploads/fc95d58c-7a50-481f-a363-835d5c04ec09.png",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7345962069323591680/"
  },
  {
    title: "Estudo de Caso - Bellabeat",
    description: "Análise de dados de uma empresa de tecnologia voltada para saúde da mulher utilizando R e técnicas de data science",
    icon: Activity,
    tags: ["R", "Tidyverse", "Kaggle"],
    image: "/portfolio/lovable-uploads/file1.png",
    demoUrl: "https://www.kaggle.com/code/catinhu/estudo-de-caso-bellabeat"
  },
  {
    title: "Projeto em Breve",
    description: "Mais informações em breve",
    icon: BarChart3,
    tags: ["Outro"],
    image: null,
    demoUrl: null,
    comingSoon: true
  },
  {
    title: "Projeto em Breve",
    description: "Mais informações em breve",
    icon: PieChart,
    tags: ["Outro"],
    image: null,
    demoUrl: null,
    comingSoon: true
  },
  {
    title: "Projeto em Breve",
    description: "Mais informações em breve",
    icon: TrendingUp,
    tags: ["Outro"],
    image: null,
    demoUrl: null,
    comingSoon: true
  },
  {
    title: "Projeto em Breve",
    description: "Mais informações em breve",
    icon: Activity,
    tags: ["Outro"],
    image: null,
    demoUrl: null,
    comingSoon: true
  },
  {
    title: "Projeto em Breve",
    description: "Mais informações em breve",
    icon: BarChart3,
    tags: ["Outro"],
    image: null,
    demoUrl: null,
    comingSoon: true
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
                {project.image ? (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                )}
                {project.image && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Eye className="h-4 w-4" />
                          Visualizar
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95">
                        <DialogTitle className="sr-only">{project.title}</DialogTitle>
                        <DialogDescription className="sr-only">
                          Visualização ampliada do projeto {project.title}
                        </DialogDescription>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
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
                
                {project.comingSoon ? (
                  <Button 
                    className="w-full gap-2 bg-muted text-muted-foreground cursor-not-allowed"
                    disabled
                  >
                    <Eye className="h-4 w-4" />
                    Em Breve
                  </Button>
                ) : (
                  <Button 
                    className="w-full gap-2 gradient-primary text-white hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver mais
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
