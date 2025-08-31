"use client"

import { useState } from "react"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
  color: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", color: "from-blue-500 to-blue-600" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", color: "from-blue-400 to-indigo-500" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", color: "from-red-500 to-red-600" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", color: "from-yellow-500 to-orange-500" },
  { code: "zh", name: "Chinese (Mandarin)", nativeName: "中文", flag: "🇨🇳", color: "from-red-600 to-red-700" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", color: "from-green-500 to-green-600" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", color: "from-red-500 to-pink-500" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", color: "from-green-400 to-green-500" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", color: "from-blue-600 to-blue-700" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", color: "from-orange-500 to-red-500" },
]

interface LanguageSelectorProps {
  onLanguageSelect: (languageCode: string) => void
}

export default function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode)
    onLanguageSelect(languageCode)
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Smart Language Learning Academy
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Choose Your Language Test
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Select the language you want to test your proficiency in
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:scale-105 bg-gradient-to-br ${language.color} text-white border-transparent shadow-lg hover:shadow-xl ${
              selectedLanguage === language.code
                ? "ring-4 ring-white/50 scale-105"
                : ""
            }`}
          >
            <div className="text-4xl mb-2">{language.flag}</div>
            <div className="font-semibold">{language.name}</div>
            <div className="text-sm opacity-90">{language.nativeName}</div>
          </button>
        ))}
      </div>

      {selectedLanguage && (
        <div className="mt-8">
          <p className="text-gray-700 mb-4">
            You selected: <span className="font-semibold">
              {languages.find(l => l.code === selectedLanguage)?.name}
            </span>
          </p>
          <button
            onClick={() => onLanguageSelect(selectedLanguage)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-200 ease-in-out"
          >
            Start {languages.find(l => l.code === selectedLanguage)?.name} Test
          </button>
        </div>
      )}
    </div>
  )
}
