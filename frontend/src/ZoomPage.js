'use client'

import { useState, useEffect } from 'react'

export default function ZoomEscape() {
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleGenerate = () => {
    console.log('Selected option:', selectedOption)
    // Add your logic here to handle the selected option
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-400">Zoom-Escape</h1>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="flex flex-col items-center space-y-6">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-64 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            onClick={handleGenerate}
            className="w-64 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Generate
          </button>
        </div>
      </main>
    </div>
  )
}
