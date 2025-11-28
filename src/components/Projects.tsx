import { motion } from "motion/react"
import { staggerContainer } from "@/lib/animations"

import { SectionHeader } from "./SectionHeader"
import { projectsData } from "@/constants"
import { ProjectCard } from "./ProjectCard"



export const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10" // 
      id="projects"
    >
      <SectionHeader
        title="My featured projects"
        subtitle="Projects"
      />

      <motion.div
        className="grid md:grid-cols-2 mt-10 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />

        ))}
      </motion.div>
    </motion.section>
  )
}

