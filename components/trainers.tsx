import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Trainers() {
  const trainers = [
    {
      name: "Alex Johnson",
      role: "Head Trainer",
      specialties: "Strength Training, HIIT",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 10 years of experience, Alex specializes in strength training and high-intensity workouts.",
    },
  ]

  return (
    <section id="trainers" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Trainer</h2>
          <p className="text-lg text-muted-foreground">
            Our certified fitness professionals are here to guide and motivate you on your fitness journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 justify-items-center">
          {trainers.map((trainer, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="relative h-64  overflow-hidden group">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-2">{trainer.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{trainer.bio}</p>
                <p className="text-sm font-medium mb-4">
                  <span className="text-foreground">Specialties:</span> {trainer.specialties}
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

