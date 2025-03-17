import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Packages() {
  const packages = [
    {
      name: "Basic",
      price: "$29",
      description: "Perfect for beginners",
      features: [
        "Access to gym facilities",
        "Basic fitness assessment",
        "2 group classes per week",
        "Locker room access",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$59",
      description: "Our most popular plan",
      features: [
        "Full access to gym facilities",
        "Comprehensive fitness assessment",
        "Unlimited group classes",
        "1 personal training session per month",
        "Nutrition consultation",
        "Access to mobile app",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$99",
      description: "For serious fitness enthusiasts",
      features: [
        "24/7 access to all facilities",
        "Advanced fitness assessment",
        "Unlimited group classes",
        "4 personal training sessions per month",
        "Customized nutrition plan",
        "Priority class booking",
        "Guest passes (2 per month)",
        "Access to premium mobile app features",
      ],
      popular: false,
    },
  ]

  return (
    <section id="packages" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Membership Packages</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect membership plan that fits your fitness goals and budget. All plans include access to our
            state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${pkg.popular ? "bg-primary" : ""}`}>Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

