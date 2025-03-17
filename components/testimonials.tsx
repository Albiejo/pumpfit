import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Mill",
      role: "Member for 2 years",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "PumpFit has completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the facilities are always clean and well-maintained. I've achieved results I never thought possible!",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Member for 1 year",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Joining PumpFit was the best decision I made for my health. The variety of classes keeps my workouts interesting, and the community is so welcoming. I look forward to going to the gym now!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Member for 6 months",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The personal training at PumpFit is exceptional. My trainer created a customized plan that works perfectly for my goals and schedule. The results speak for themselves!",
      rating: 4,
    },
    {
      name: "Sophia Garcia",
      role: "Member for 3 years",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "I've been to many gyms over the years, but PumpFit stands out for its excellent equipment, knowledgeable staff, and friendly atmosphere. It's become an essential part of my daily routine.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear from our members who have transformed their lives with PumpFit.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

