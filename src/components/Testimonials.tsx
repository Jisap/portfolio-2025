import { testimonials } from "@/constants"
import { fadeUp } from "@/lib/animations"
import { ChevronLeftIcon, ChevronRightIcon, SparkleIcon, StarIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"




export const Testimonials = () => {

  const [curSlide, setCurSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setCurSlide((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [curSlide, isPaused]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className="mt-20 scroll-mt-10"
      id="testimonial"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <p className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32">
        <SparkleIcon size={15} /> Reviews
      </p>

      <h2 className="text-4xl font-bold capitalize mt-2 md:max-w-3xl">
        What clients say about me.
      </h2>

      <div className="mt-10 relative w-full">
        <AnimatePresence
          mode="wait"
        >
          <motion.div
            key={curSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="border rounded-3xl border-neutral-800 bg-neutral-900/10 p-8 flex flex-col md:flex-row items-start gap-6"
          >
            <img
              src={testimonials[curSlide].image}
              alt={testimonials[curSlide].name}
              className="size-20 rounded-full object-cover"
            />

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonials[curSlide].name}
                </h3>

                <p className="text-sm text-neutral-400">
                  {testimonials[curSlide].role}
                </p>
              </div>

              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed">
                {testimonials[curSlide].text}
              </p>

              <a
                href={testimonials[curSlide].link}
                className="inline-flex items-center gap-1 text-sm font-medium hover:text-green-400 text-neutral-400 transition"
              >
                Project ➜
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex gap-2 mt-8">
          <button
            onClick={prev}
            className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 hover:border-primary transition"
          >
            <ChevronLeftIcon size={18} />
          </button>

          <button
            onClick={next}
            className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 hover:border-primary transition"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurSlide(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === curSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-neutral-600 hover:bg-neutral-500"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
