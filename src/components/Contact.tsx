
import { Mail, Linkedin, Github, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "alisson.oliveira@email.com",
      href: "mailto:alisson.oliveira@email.com",
      color: "text-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/alisson-oliveira",
      href: "https://linkedin.com/in/alisson-oliveira",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/alisson-oliveira",
      href: "https://github.com/alisson-oliveira",
      color: "text-gray-800 dark:text-gray-200"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      href: "https://wa.me/5511999999999",
      color: "text-green-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. 
            Entre em contato para discutirmos como posso ajudar seu negócio 
            a tomar decisões mais assertivas através dos dados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-none bg-card/50 backdrop-blur-sm cursor-pointer"
                onClick={() => window.open(contact.href, '_blank')}
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-background ${contact.color}`}>
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Pronto para começar um projeto?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tenho experiência em diversos setores e estou pronto para ajudar 
                sua empresa a extrair o máximo valor dos seus dados. Vamos criar 
                algo incrível juntos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="gradient-primary text-white hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open("mailto:alisson.oliveira@email.com", '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open("https://wa.me/5511999999999", '_blank')}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
