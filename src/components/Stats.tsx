import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { statsData } from "@/constants"
import { AnimatedCounter } from "./AnimatedCounter"



export const Stats = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
      id="stats"
    >
      {statsData.map((stats, i) => {

        const match = stats.number.match(/^(\d+)(.*)$/)
        const number = match ? parseInt(match[1]) : 0;
        const suffix = match ? match[2] : "";

        return (
          <motion.div
            key={i}
            variants={fadeUp}
            //className="relative group border border-neutral-700 p-6 rounded-xl flex justify-center items-center flex-col py-6"
            className="relative border border-neutral-700/50 backdrop-blur-sm bg-gradient-to-br from-neutral-900/50 to-neutral-800/30
            p-6 rounded-xl flex justify-center items-center flex-col py-6
            hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300
            group overflow-hidden will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-4xl capitalize font-bold lining-nums relative z-10">
              <AnimatedCounter
                target={number}
                suffix={suffix}
              />
            </p>
            <p className="text-neutral-300 relative z-10">{stats.label}</p>

          </motion.div>
        )
      })}
    </motion.section>
  )
}
