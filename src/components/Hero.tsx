import { motion } from "motion/react"
import { SparkleIcon } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Button } from "./ui/button"




export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-20"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
      >
        I'm{" "}
        <span className="bg-gradient-to-r from-primary via-neutral-200 to-primary bg-clip-text text-transparent animate-gradient">
          David
        </span>{" "}
        UI/UX designer and frontend developer
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="mt-5 flex gap-2"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
            <a href="#projects">
              My projects
            </a>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="hover:bg-primary hover:text-gray-500  transition-colors">
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

