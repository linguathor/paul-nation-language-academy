"use client"

import { useState } from "react"
import LanguageSelector from "@/components/language-selector"
import WelcomeScreen from "@/components/welcome-screen"
import TestScreen from "@/components/test-screen"
import ResultsScreen from "@/components/results-screen"
import type { UserAnswer, FinalScores } from "@/types/test-types"
import { questionsByLanguage } from "@/data/questions"

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [currentScreen, setCurrentScreen] = useState<"language-selector" | "welcome" | "test" | "results">("language-selector")
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [finalScores, setFinalScores] = useState<FinalScores | null>(null)

  // Get questions for the selected language, fallback to empty array if no language selected
  const languageQuestions = selectedLanguage ? questionsByLanguage[selectedLanguage] || [] : []

  // Filter out any commented questions
  const activeQuestions = languageQuestions.filter((q) => !q.commentedOut)

  // Calculate level counts for progress indicator
  const levelCounts = {
    B1: activeQuestions.filter((q) => q.level === "B1").length,
    B2: activeQuestions.filter((q) => q.level === "B2").length,
    C1: activeQuestions.filter((q) => q.level === "C1").length,
  }

  // Calculate level start indices
  const levelStartIndex = {
    B1: 0,
    B2: languageQuestions.filter((q) => q.level === "B1").length,
    C1: languageQuestions.filter((q) => q.level === "B1").length + languageQuestions.filter((q) => q.level === "B2").length,
  }

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode)
    setCurrentScreen("welcome")
  }

  const startTest = () => {
    setUserAnswers([])
    setFinalScores(null)
    setCurrentScreen("test")
  }

  const submitAnswer = (answer: UserAnswer) => {
    setUserAnswers((prev) => [...prev, answer])
  }

  const finishTest = (scores: FinalScores) => {
    setFinalScores(scores)
    setCurrentScreen("results")
  }

  const restartTest = () => {
    setUserAnswers([])
    setFinalScores(null)
    setCurrentScreen("language-selector")
  }

  const jumpToResults = () => {
    // Mock data for testing
    const mockScores: FinalScores = {
      estimatedLevel: "B2",
      overallScore: 18,
      totalQuestions: 30,
      overallPercentage: 60,
      b1Correct: 8,
      b1Total: 10,
      b1Percentage: 80,
      b2Correct: 6,
      b2Total: 10,
      b2Percentage: 60,
      c1Correct: 4,
      c1Total: 10,
      c1Percentage: 40,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsBelowB1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Below B1",
      overallScore: 12,
      totalQuestions: 30,
      overallPercentage: 40,
      b1Correct: 4,
      b1Total: 10,
      b1Percentage: 40,
      b2Correct: 4,
      b2Total: 10,
      b2Percentage: 40,
      c1Correct: 4,
      c1Total: 10,
      c1Percentage: 40,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsApproachingB1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Approaching B1",
      overallScore: 16,
      totalQuestions: 30,
      overallPercentage: 53,
      b1Correct: 6,
      b1Total: 10,
      b1Percentage: 60,
      b2Correct: 5,
      b2Total: 10,
      b2Percentage: 50,
      c1Correct: 5,
      c1Total: 10,
      c1Percentage: 50,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsLikelyB1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Likely B1",
      overallScore: 19,
      totalQuestions: 30,
      overallPercentage: 63,
      b1Correct: 7,
      b1Total: 10,
      b1Percentage: 70,
      b2Correct: 6,
      b2Total: 10,
      b2Percentage: 60,
      c1Correct: 6,
      c1Total: 10,
      c1Percentage: 60,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsSolidB1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Solid B1",
      overallScore: 22,
      totalQuestions: 30,
      overallPercentage: 73,
      b1Correct: 8,
      b1Total: 10,
      b1Percentage: 80,
      b2Correct: 7,
      b2Total: 10,
      b2Percentage: 70,
      c1Correct: 7,
      c1Total: 10,
      c1Percentage: 70,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsLikelyB2 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Likely B2",
      overallScore: 20,
      totalQuestions: 30,
      overallPercentage: 67,
      b1Correct: 8,
      b1Total: 10,
      b1Percentage: 80,
      b2Correct: 6,
      b2Total: 10,
      b2Percentage: 60,
      c1Correct: 6,
      c1Total: 10,
      c1Percentage: 60,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsSolidB2 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Solid B2",
      overallScore: 24,
      totalQuestions: 30,
      overallPercentage: 80,
      b1Correct: 9,
      b1Total: 10,
      b1Percentage: 90,
      b2Correct: 8,
      b2Total: 10,
      b2Percentage: 80,
      c1Correct: 7,
      c1Total: 10,
      c1Percentage: 70,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsLikelyC1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Likely C1",
      overallScore: 22,
      totalQuestions: 30,
      overallPercentage: 73,
      b1Correct: 8,
      b1Total: 10,
      b1Percentage: 80,
      b2Correct: 7,
      b2Total: 10,
      b2Percentage: 70,
      c1Correct: 7,
      c1Total: 10,
      c1Percentage: 70,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  const jumpToResultsSolidC1 = () => {
    const mockScores: FinalScores = {
      estimatedLevel: "Solid C1",
      overallScore: 26,
      totalQuestions: 30,
      overallPercentage: 87,
      b1Correct: 9,
      b1Total: 10,
      b1Percentage: 90,
      b2Correct: 9,
      b2Total: 10,
      b2Percentage: 90,
      c1Correct: 8,
      c1Total: 10,
      c1Percentage: 80,
    }
    setFinalScores(mockScores)
    setCurrentScreen("results")
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-4xl relative">
        <div className="absolute top-3 right-4 text-xs text-gray-400">
          {selectedLanguage ? `${selectedLanguage.toUpperCase()} Test - ` : ""}LinguaThor⚡Language Tech
        </div>

        {currentScreen === "language-selector" && (
          <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        )}

        {currentScreen === "welcome" && (
          <WelcomeScreen
            onStart={startTest}
            onJumpToResults={jumpToResults}
            onJumpToResultsBelowB1={jumpToResultsBelowB1}
            onJumpToResultsApproachingB1={jumpToResultsApproachingB1}
            onJumpToResultsLikelyB1={jumpToResultsLikelyB1}
            onJumpToResultsSolidB1={jumpToResultsSolidB1}
            onJumpToResultsLikelyB2={jumpToResultsLikelyB2}
            onJumpToResultsSolidB2={jumpToResultsSolidB2}
            onJumpToResultsLikelyC1={jumpToResultsLikelyC1}
            onJumpToResultsSolidC1={jumpToResultsSolidC1}
            selectedLanguage={selectedLanguage}
          />
        )}

        {currentScreen === "test" && (
          <TestScreen
            questions={activeQuestions}
            levelCounts={levelCounts}
            levelStartIndex={levelStartIndex}
            onSubmitAnswer={submitAnswer}
            userAnswers={userAnswers}
            onFinish={finishTest}
            selectedLanguage={selectedLanguage}
          />
        )}

        {currentScreen === "results" && finalScores && (
          <ResultsScreen
            userAnswers={userAnswers}
            finalScores={finalScores}
            levelStartIndex={levelStartIndex}
            onRestart={restartTest}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>
    </div>
  )
}
