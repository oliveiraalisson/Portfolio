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
            <Card key={index} className="group clay-card overflow-hidden animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative">
                {project.image ? (
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-tertiary/20 to-quaternary/20 flex items-center justify-center">
                    <project.icon className="h-16 w-16 text-muted-foreground/50 icon-3d animate-float" />
                  </div>
                )}
                {project.image && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="gap-2 clay-button bg-white/90 text-foreground hover:bg-white">
                          <Eye className="h-4 w-4 icon-3d" />
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
                  {project.tags.map((tag, tagIndex) => {
                    const colors = ['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-quaternary', 'bg-success'];
                    const colorClass = colors[tagIndex % colors.length];
                    return (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 ${colorClass} text-white text-sm clay-button font-medium`}
                        style={{animationDelay: `${(tagIndex + 1) * 200}ms`}}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                
                {project.comingSoon ? (
                  <Button 
                    className="w-full gap-2 clay-button bg-muted text-muted-foreground cursor-not-allowed"
                    disabled
                  >
                    <Eye className="h-4 w-4 icon-3d" />
                    Em Breve
                  </Button>
                ) : (
                  <Button 
                    className="w-full gap-2 clay-button gradient-primary text-white font-semibold"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 icon-3d" />
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
