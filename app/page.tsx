import Hero from "@/components/hero"
import About from "@/components/about"
import Packages from "@/components/packages"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Trainers from "@/components/trainers"
import Classes from "@/components/classes"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Packages />
      <Classes />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

