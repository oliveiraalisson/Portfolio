
import { Mail, Linkedin, Github, Phone, MessageSquare } from "lucide-react"
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
      icon: Kaggle,
      label: "Kaggle",
      value: "+55 (11) 99999-9999",
      href: "https://www.kaggle.com/catinhu",
      color: "text-blue-200"
    }
  ]
