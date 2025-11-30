
import { Hero } from "./components/Hero"
import { Stats } from "./components/Stats"
import { Projects } from "./components/Projects"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { Resume } from "./components/Resume"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import Lenis from "lenis"
import { useEffect } from "react"





export const App = () => {

  useEffect(() => {
    const lenis = new Lenis();   // Creación de una instancia de Lenis

    function raf(time: any) {    // Función raf que recibe un parametro time proporcionado por requestAnimationFrame
      lenis.raf(time)            // Se ejecuta en cada fotograma y calcula cuánto debe desplazarse la página
      requestAnimationFrame(raf) // Se llama a sí misma para crear un bucle
    }

    requestAnimationFrame(raf)

  }, [])

  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  )
}

