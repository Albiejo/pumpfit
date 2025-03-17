import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Classes() {
  const classes = [
    {
      name: "HIIT",
      description: "High-intensity interval training to maximize calorie burn and improve cardiovascular fitness.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "45 min",
      level: "Intermediate",
    },
    {
      name: "Yoga",
      description: "Improve flexibility, balance, and mental clarity with our expert-led yoga sessions.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "60 min",
      level: "All Levels",
    },
    {
      name: "Spin",
      description: "High-energy indoor cycling workouts set to motivating music.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "45 min",
      level: "All Levels",
    },
    {
      name: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training classes.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "50 min",
      level: "Beginner to Advanced",
    },
  ]

  return (
    <section id="classes" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Classes</h2>
          <p className="text-lg text-muted-foreground">
            Discover our diverse range of fitness classes designed to keep you motivated and help you achieve your
            goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={cls.image || "/placeholder.svg"} alt={cls.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
                <p className="text-muted-foreground mb-4">{cls.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{cls.duration}</span>
                  <span className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-full">{cls.level}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

