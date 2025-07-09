
import { BarChart3, Brain, Database, LineChart, PieChart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const skills = [
    {
      icon: BarChart3,
      title: "Visualização de Dados",
      description: "Criação de dashboards e gráficos que contam histórias com dados"
    },
    {
      icon: Database,
      title: "Análise de Dados",
      description: "Extração de insights valiosos através de análises estatísticas"
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Transformação de dados em estratégias de negócio eficazes"
    },
    {
      icon: LineChart,
      title: "Relatórios Executivos",
      description: "Desenvolvimento de relatórios claros para tomada de decisão"
    },
    {
      icon: PieChart,
      title: "Data Mining",
      description: "Descoberta de padrões e tendências em grandes volumes de dados"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe para alinhar análises com objetivos do negócio"
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sou um analista de dados com paixão por descobrir insights que impulsionam 
            decisões estratégicas. Com experiência em diversas ferramentas e metodologias, 
            transformo dados complexos em visualizações claras e acionáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full gradient-primary">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center">Ferramentas & Tecnologias</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Python", "SQL", "Power BI", "Tableau", 
              "Excel", "R", "Google Analytics", "Pandas",
              "Matplotlib", "Seaborn", "Jupyter", "Git"
            ].map((tool, index) => (
              <div 
                key={index}
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              >
                <span className="font-medium text-primary">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
