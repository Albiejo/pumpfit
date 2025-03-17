import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const features = [
    "State-of-the-art equipment",
    "Expert personal trainer",
    "Diverse group fitness classes",
    "Nutrition counseling",
    "Flexible timing for members",
    "Clean and spacious facilities",
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">About PumpFit Gym</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2010, PumpFit has been helping people achieve their fitness goals for over a decade. Our
              mission is to provide a welcoming environment where everyone, regardless of fitness level, can work
              towards a healthier lifestyle.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With over 10,000 square feet of training space, we offer a comprehensive range of equipment and services
              to meet all your fitness needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/image3.jpg?height=800&width=600" alt="Gym interior" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

