import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion } from "motion/react"
import { SectionHeader } from "./SectionHeader"
import { Button } from "./ui/button"



export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="about"
    >
      <SectionHeader
        title="Transforming complexity into effortless design"
        subtitle="About"
      />

      <motion.p
        variants={fadeUp}
        className="mt-4 text-neutral-300"
      >
        I'm a  designer and front-end developer passionate about transforming complex
        problems into clear, intuitive digital experiences. I believe great design isn't just
        about how something look-it's about how it works. My approach blends creativity with strategy,
        ensuring every interface not only looks good but also feels effortless to use.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-neutral-300"
      >
        Over the past few years, I've worked across web, brand, and product design-bringing ideas
        to life through modern tools like Figma, React, and Tailwind CSS. Whether it's building a
        design system, crafting a responsive wesite, or refining the smallest detail in a button
        animation, I'm always driven by one goal: creating meaningfull, human-centered design that makes
        technology feel simple.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className="mt-5">Contact me</Button>
      </motion.div>
    </motion.section>
  )
}
