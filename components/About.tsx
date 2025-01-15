'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const aboutOptions = [
  {
    title: "Tech Enthusiast",
    content: "I'm passionate about exploring new technologies and pushing the boundaries of what's possible in web development."
  },
  {
    title: "Problem Solver",
    content: "I thrive on tackling complex challenges and finding elegant solutions that make a real impact."
  },
  {
    title: "Continuous Learner",
    content: "In the ever-evolving world of tech, I'm committed to continuous learning and staying ahead of the curve."
  }
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="about" className="section">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          {aboutOptions.map((option, index) => (
            <button
              key={option.title}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              } transition-colors duration-300`}
              onClick={() => setActiveIndex(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg mb-4">{aboutOptions[activeIndex].content}</p>
        </motion.div>
      </div>
    </section>
  )
}

