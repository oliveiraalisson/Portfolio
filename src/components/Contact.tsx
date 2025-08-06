
import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { SiKaggle } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "contatealisson@email.com",
      href: "mailto:contatealisson@email.com",
      color: "text-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/alissonmichel",
      href: "https://www.linkedin.com/in/alissonmichel/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/oliveiraalisson",
      href: "https://github.com/oliveiraalisson",
      color: "text-gray-800 dark:text-gray-200"
    },
    {
      icon: SiKaggle,
      label: "Kaggle",
      value: "/catinhu",
      href: "https://www.kaggle.com/catinhu",
      color: "text-[#21c0ff]"
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
            Entre em contato para conversarmos. Vamos nos conectar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  )
}
