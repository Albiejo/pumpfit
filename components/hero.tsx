import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image4.jpg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-16 md:pt-24 lg:pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              FORGE YOUR <span className="text-primary font-black">STRENGTH</span>
            </h1>
            <p className="mt-6 text-xl max-w-2xl">
              Push your limits. Build your body. Transform your life with PumpFit's elite training programs and
              state-of-the-art facilities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#packages">View Packages</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-gray-900 " asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent rounded-lg overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/image5.jpg?height=1000&width=800')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

