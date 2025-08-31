"use client"

import { useState, useEffect } from "react"
import type { Question, UserAnswer, FinalScores } from "@/types/test-types"
import FeedbackArea from "./feedback-area"

interface TestScreenProps {
  questions: Question[]
  levelCounts: Record<string, number>
  levelStartIndex: Record<string, number>
  onSubmitAnswer: (answer: UserAnswer) => void
  userAnswers: UserAnswer[]
  onFinish: (scores: FinalScores) => void
  selectedLanguage: string | null
}

export default function TestScreen({
  questions,
  levelCounts,
  levelStartIndex,
  onSubmitAnswer,
  userAnswers,
  onFinish,
  selectedLanguage,
}: TestScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])

  const currentQuestion = questions[currentQuestionIndex]

  // Shuffle options when question changes
  useEffect(() => {
    if (currentQuestion) {
      const options = [...currentQuestion.options]
      shuffleArray(options)
      setShuffledOptions(options)
      setSelectedAnswer(null)
      setQuestionAnswered(false)
    }
  }, [currentQuestion, currentQuestionIndex])

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  function handleOptionSelection(option: string) {
    if (questionAnswered) return

    setSelectedAnswer(option)
    setQuestionAnswered(true)

    const isCorrect = option === currentQuestion.correctAnswer

    // Create answer object
    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.questionText,
      options: currentQuestion.options,
      selectedAnswer: option,
      correctAnswer: currentQuestion.correctAnswer,
      level: currentQuestion.level,
      isCorrect: isCorrect,
    }

    // Submit answer to parent component
    onSubmitAnswer(answer)
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      // Calculate final scores
      calculateAndShowResults()
    }
  }

  function calculateAndShowResults() {
    // Calculate scores based on user answers
    let score = 0
    let correctB1 = 0,
      totalB1 = 0
    let correctB2 = 0,
      totalB2 = 0
    let correctC1 = 0,
      totalC1 = 0

    userAnswers.forEach((answer) => {
      if (answer.isCorrect) {
        score++
        if (answer.level === "B1") correctB1++
        if (answer.level === "B2") correctB2++
        if (answer.level === "C1") correctC1++
      }
      // Count totals based on answers given for each level
      if (answer.level === "B1") totalB1++
      if (answer.level === "B2") totalB2++
      if (answer.level === "C1") totalC1++
    })

    // Calculate percentages
    const overallPercentage = userAnswers.length > 0 ? (score / userAnswers.length) * 100 : 0
    const b1Percentage = totalB1 > 0 ? (correctB1 / totalB1) * 100 : 0
    const b2Percentage = totalB2 > 0 ? (correctB2 / totalB2) * 100 : 0
    const c1Percentage = totalC1 > 0 ? (correctC1 / totalC1) * 100 : 0

    // New logic for determining estimatedLevel
    let estimatedLevel = "Below B1" // Default level

    // Thresholds for percentage scores (can be adjusted as needed)
    const passStrongThreshold = 75 // Represents a solid grasp of the level
    const passMidThreshold = 60 // Represents a likely grasp or approaching the level well
    const passMinThreshold = 50 // Represents a minimum performance to be considered 'approaching'

    // Determine estimated level based on performance, requiring proficiency in lower levels.
    if (
      totalC1 > 0 &&
      c1Percentage >= passMidThreshold &&
      totalB2 > 0 &&
      b2Percentage >= passMidThreshold &&
      totalB1 > 0 &&
      b1Percentage >= passMidThreshold
    ) {
      // Qualifies for C1 consideration
      if (c1Percentage >= passStrongThreshold) {
        estimatedLevel = "Solid C1"
      } else {
        estimatedLevel = "Likely C1"
      }
    } else if (totalB2 > 0 && b2Percentage >= passMidThreshold && totalB1 > 0 && b1Percentage >= passMidThreshold) {
      // Qualifies for B2 consideration (if not C1)
      if (b2Percentage >= passStrongThreshold) {
        estimatedLevel = "Solid B2"
      } else {
        estimatedLevel = "Likely B2"
      }
    } else if (totalB1 > 0 && b1Percentage >= passMidThreshold) {
      // Qualifies for B1 consideration (if not C1 or B2)
      if (b1Percentage >= passStrongThreshold) {
        estimatedLevel = "Solid B1"
      } else {
        estimatedLevel = "Likely B1"
      }
    } else if (totalB1 > 0 && b1Percentage >= passMinThreshold) {
      // If not meeting mid-threshold for B1, check for minimum threshold
      estimatedLevel = "Approaching B1"
    }
    // If none of the above conditions are met, 'estimatedLevel' remains "Below B1".

    // Create final scores object
    const finalScores: FinalScores = {
      estimatedLevel,
      overallScore: score,
      totalQuestions: userAnswers.length, // This should be the total number of questions answered
      overallPercentage,
      b1Correct: correctB1,
      b1Total: totalB1, // Total B1 questions answered
      b1Percentage,
      b2Correct: correctB2,
      b2Total: totalB2, // Total B2 questions answered
      b2Percentage,
      c1Correct: correctC1,
      c1Total: totalC1, // Total C1 questions answered
      c1Percentage,
    }

    // Pass scores to parent component
    onFinish(finalScores)
  }

  // Calculate progress indicators
  const overallQuestionNumber = currentQuestionIndex + 1
  const currentLevel = currentQuestion?.level || "B1"
  const levelTotal = levelCounts[currentLevel]
  const levelQuestionNumber =
    questions
      .slice(
        0,
        questions.findIndex((q) => q.id === currentQuestion?.id),
      )
      .filter((q) => q.level === currentLevel).length + 1

  return (
    <div>
      <div className="mb-4">
        <div className="text-right text-sm text-gray-600">
          <p>
            Question {overallQuestionNumber} / {questions.length}
          </p>
          <p>
            {currentLevel} Question {levelQuestionNumber} / {levelTotal}
          </p>
        </div>

        {/* Overall progress bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${(overallQuestionNumber / questions.length) * 100}%`,
              backgroundColor: currentLevel === "B1" ? "#60a5fa" : currentLevel === "B2" ? "#34d399" : "#a78bfa",
            }}
          ></div>
        </div>

        {/* Level-specific progress indicators */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <div>B1</div>
          <div>B2</div>
          <div>C1</div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg sm:text-xl font-semibold text-gray-700">
          {currentQuestion?.questionText || "Loading question..."}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {shuffledOptions.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleOptionSelection(option)}
              disabled={questionAnswered}
              className="hidden"
            />
            <label
              htmlFor={`option-${index}`}
              className={`block w-full text-left px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out ${
                questionAnswered && option === currentQuestion.correctAnswer
                  ? "correct-answer-highlight"
                  : questionAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer
                    ? "incorrect-answer-highlight"
                    : questionAnswered
                      ? "option-disabled"
                      : ""
              } ${selectedAnswer === option && !questionAnswered ? "bg-sky-100 border-sky-400" : ""}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      {questionAnswered && currentQuestion && (
        <FeedbackArea
          isCorrect={selectedAnswer === currentQuestion.correctAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          explanationEn={currentQuestion.explanation_en}
        />
      )}

      <div className="flex justify-end space-x-4">
        {questionAnswered && (
          <button
            onClick={handleNextQuestion}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200 ease-in-out"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Show Results"}
          </button>
        )}
      </div>
    </div>
  )
}
