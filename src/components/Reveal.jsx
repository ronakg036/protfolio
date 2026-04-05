import { motion } from "framer-motion"

function Reveal({ children, className = "", delay = 0 }) {
  const MotionDiv = motion.div

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  )
}

export default Reveal
