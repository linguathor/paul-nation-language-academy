export interface Question {
  id: number
  level: "B1" | "B2" | "C1"
  skill: "Grammar" | "Vocabulary"
  questionText: string
  options: string[]
  correctAnswer: string
  explanation_en?: string
  commentedOut?: boolean
}

export interface UserAnswer {
  questionId: number
  questionText: string
  options: string[]
  selectedAnswer: string
  correctAnswer: string
  level: string
  isCorrect: boolean
}

export interface FinalScores {
  estimatedLevel: string
  overallScore: number
  totalQuestions: number
  overallPercentage: number
  b1Correct: number
  b1Total: number
  b1Percentage: number
  b2Correct: number
  b2Total: number
  b2Percentage: number
  c1Correct: number
  c1Total: number
  c1Percentage: number
}
