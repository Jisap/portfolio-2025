import { fadeUp } from "@/lib/animations"
import { motion } from "motion/react"
import type { ProjectType } from "@/types"
import { ExternalLink } from "lucide-react"




export const ProjectCard = ({
  imgSrc,
  tags,
  title,
  projectLink,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <figure className="overflow-hidden rounded-md relative">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="rounded-md transition-all duration-500 group-hover:scale-105 w-full"
        />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Overlay with project info - appears on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                     flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{title}</h3>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors drop-shadow-md"
          >
            View Project <ExternalLink size={16} />
          </a>
        </motion.div>
      </figure>

      {/* Tags */}
      <div className="absolute bottom-4 left-2 flex gap-2 z-10 transition-transform duration-300 group-hover:translate-y-[-4px]">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="backdrop-blur-md bg-background/90 hover:bg-primary hover:text-black 
                       py-1 px-3 rounded-sm text-sm cursor-pointer
                       border border-neutral-700/50 hover:border-primary
                       transition-all duration-200 shadow-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
