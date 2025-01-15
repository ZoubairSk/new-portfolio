'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="py-6 fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">ZS</a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-900" />
            )
          )}
        </button>
      </nav>
    </header>
  )
}

