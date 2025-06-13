"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Heart, ArrowLeft, Music, VolumeX, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function MessagePage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  const messages = [
    "Today is all about celebrating you, the most amazing person I know.",
    "Your smile brightens my darkest days, and your laugh is my favorite melody.",
    "I cherish every moment we spend together, every memory we create.",
    "You deserve all the happiness in the world, today and always.",
    "Happy Birthday, my love. Here's to many more beautiful years together.",
  ]

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/birthday-music.mp3")
    audio.loop = true
    setAudioElement(audio)

    // Auto-advance slides
    const interval = setInterval(() => {
      if (currentSlide < messages.length - 1) {
        setCurrentSlide((prev) => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
      if (audio) {
        audio.pause()
        audio.src = ""
      }
    }
  }, [currentSlide, messages.length])

  const toggleMusic = () => {
    if (!audioElement) return

    if (isPlaying) {
      audioElement.pause()
    } else {
      audioElement.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center px-4 sm:px-6 py-16 text-white relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 z-0">
        {/* Additional light effects */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-pink-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-1/2 h-1/3 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-1/2 h-1/3 bg-gradient-to-l from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1],
              opacity: [0, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`floating-heart-${i}`}
          className="absolute text-pink-400/30 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 10}px`,
          }}
          initial={{
            y: typeof window !== "undefined" ? window.innerHeight : 1000,
            x: Math.random() * 50 - 25,
            rotate: Math.random() * 180 - 90,
          }}
          animate={{
            y: -100,
            x: [Math.random() * 50 - 25, Math.random() * 100 - 50, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          <Heart className="fill-pink-400/30" />
        </motion.div>
      ))}

      {/* Back button */}
      <motion.button
        onClick={() => router.push("/")}
        className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
      </motion.button>

      {/* Music toggle */}
      <motion.button
        onClick={toggleMusic}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      </motion.button>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl min-h-[50vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            My Birthday Message To You
          </motion.h1>

          {/* Image placeholder with glowing frame */}
          <motion.div
            className="mb-8 relative max-w-xs sm:max-w-sm mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Animated glow effect around the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl opacity-75 blur-md animate-pulse"></div>

            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-indigo-500/50 rounded-lg opacity-50 filter blur-sm"></div>

            {/* Image container */}
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              {/* Placeholder image - replace the src with your actual image later */}
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Special memory"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />

                {/* Overlay with instructions */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center">
                  <ImageIcon className="w-8 h-8 mb-2 text-white/80" />
                  <p className="text-sm sm:text-base text-white/90">Replace with your special photo</p>
                  <p className="text-xs text-pink-300/90 mt-1">300×300px recommended</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-2xl border border-white/10 min-h-[150px] sm:min-h-[200px] flex items-center justify-center">
            {/* Decorative elements */}
            <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 w-6 sm:w-10 h-6 sm:h-10 text-pink-400">
              <Heart className="w-full h-full fill-pink-400" />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-6 sm:w-10 h-6 sm:h-10 text-pink-400">
              <Heart className="w-full h-full fill-pink-400" />
            </div>

            {/* Message carousel */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl italic text-white"
              >
                {messages[currentSlide]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-pink-400 scale-125" : "bg-white/30"
                }`}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Final message */}
      <motion.div
        className="mt-8 sm:mt-12 text-center max-w-md z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-base sm:text-lg text-pink-200">
          I hope this birthday brings you as much joy as you bring to my life every single day.
        </p>
      </motion.div>
    </div>
  )
}
