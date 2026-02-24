import { motion } from "framer-motion";

export default function FloatingBookingCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-4 md:hidden"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        className="w-full max-w-md pulse-gold py-4 font-semibold text-lg flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
          color: "#fff",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        🎉 Book Your Decoration Now
      </motion.button>
    </motion.div>
  );
}