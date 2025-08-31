interface FeedbackAreaProps {
  isCorrect: boolean
  correctAnswer: string
  explanationEn?: string
}

export default function FeedbackArea({
  isCorrect,
  correctAnswer,
  explanationEn = "No explanation available.",
}: FeedbackAreaProps) {
  return (
    <div className={`p-4 rounded-md mb-4 space-y-2 ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
      <p className="font-semibold">{isCorrect ? "Correct!" : "Incorrect"}</p>
      <p>Correct answer: {correctAnswer}</p>
      <div className="text-sm">
        <p>{explanationEn}</p>
      </div>
    </div>
  )
}
