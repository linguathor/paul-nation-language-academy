"use client"

import { languageConfigs } from "@/data/language-configs"

interface WelcomeScreenProps {
  onStart: () => void
  onJumpToResults: () => void
  onJumpToResultsBelowB1: () => void
  onJumpToResultsApproachingB1: () => void
  onJumpToResultsSolidB1: () => void
  onJumpToResultsApproachingB2: () => void
  onJumpToResultsSolidB2: () => void
  onJumpToResultsApproachingC1: () => void
  onJumpToResultsSolidC1: () => void
  selectedLanguage: string | null
}

export default function WelcomeScreen({ 
  onStart, 
  onJumpToResults,
  onJumpToResultsBelowB1,
  onJumpToResultsApproachingB1,
  onJumpToResultsSolidB1,
  onJumpToResultsApproachingB2,
  onJumpToResultsSolidB2,
  onJumpToResultsApproachingC1,
  onJumpToResultsSolidC1,
  selectedLanguage
}: WelcomeScreenProps) {
  const languageConfig = selectedLanguage ? languageConfigs[selectedLanguage] : languageConfigs.en

  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        {languageConfig.welcomeText}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{languageConfig.name} Vocabulary Size Test</p>
      <div className="text-left space-y-3 text-gray-700 mb-8">
        <p>This test will help you estimate your current vocabulary size and {languageConfig.name} level.</p>
        <p>Here's how it works:</p>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1">
          {languageConfig.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <p>
          Please allow about <strong>10-15 minutes</strong> to complete the test.
        </p>
        <p>Good luck!</p>
      </div>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow transition duration-200 ease-in-out"
      >
        Start test
      </button>
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-3">Testing Options - Jump to Results:</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onJumpToResultsBelowB1}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Below B1
          </button>
          <button
            onClick={onJumpToResultsApproachingB1}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Approaching B1
          </button>
          <button
            onClick={onJumpToResultsApproachingB1}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Approaching B1
          </button>
          <button
            onClick={onJumpToResultsSolidB1}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Solid B1
          </button>
          <button
            onClick={onJumpToResultsApproachingB2}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Approaching B2
          </button>
          <button
            onClick={onJumpToResultsSolidB2}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Solid B2
          </button>
          <button
            onClick={onJumpToResultsApproachingC1}
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Approaching C1
          </button>
          <button
            onClick={onJumpToResultsSolidC1}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-3 rounded text-sm shadow transition duration-200 ease-in-out"
          >
            Solid C1
          </button>
        </div>
      </div>
    </div>
  )
}
