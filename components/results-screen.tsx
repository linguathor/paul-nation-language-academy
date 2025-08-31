"use client"
import type { UserAnswer, FinalScores } from "@/types/test-types"
import { languageConfigs } from "@/data/language-configs"

// Helper functions for downloading results
function downloadAsText(
  userAnswers: UserAnswer[],
  finalScores: FinalScores,
  recommendation: string,
  detailedRecommendation: string,
  languageConfig: any,
) {
  // Create text content
  let content = `${languageConfig.title} - Results\n`
  content += `====================================\n\n`
  content += `Estimated Level: ${finalScores.estimatedLevel}\n\n`

  content += `Score Breakdown:\n`
  content += `Overall: ${finalScores.overallScore}/${finalScores.totalQuestions} (${finalScores.overallPercentage.toFixed(1)}%)\n`
  content += `2,000-word level: ${finalScores.b1Correct}/${finalScores.b1Total} (${finalScores.b1Percentage.toFixed(1)}%)\n`
  content += `3,000-word level: ${finalScores.b2Correct}/${finalScores.b2Total} (${finalScores.b2Percentage.toFixed(1)}%)\n`
  content += `Academic Words: ${finalScores.c1Correct}/${finalScores.c1Total} (${finalScores.c1Percentage.toFixed(1)}%)\n\n`

  content += `Recommendation:\n${recommendation}\n\n`

  content += `Detailed Recommendations:\n${detailedRecommendation}\n\n`

  content += `Continue your language learning journey with:\n`
  content += `Smart Language Learning Academy\n\n`

  content += `Answer Summary:\n`
  userAnswers.forEach((answer, index) => {
    const levelQuestionNum = userAnswers.filter(
      (a) => a.level === answer.level && a.questionId <= answer.questionId,
    ).length

    content += `${answer.level} #${levelQuestionNum}: ${answer.questionText}\n`
    content += `Your answer: ${answer.selectedAnswer}\n`
    content += `Correct answer: ${answer.correctAnswer}\n`
    content += `Result: ${answer.isCorrect ? "Correct" : "Incorrect"}\n\n`
  })

  content += `Generated on: ${new Date().toLocaleString()}\n`
  content += `Smart Language Learning Academy\n`

  // Create and trigger download
  const blob = new Blob([content], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${languageConfig.title.replace(/\s+/g, '_')}_Results_${new Date().toISOString().slice(0, 10)}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadAsHTML(
  userAnswers: UserAnswer[],
  finalScores: FinalScores,
  recommendation: string,
  detailedRecommendation: string,
  languageConfig: any,
) {
  // Create HTML content
  let content = `<!DOCTYPE html>
<html lang="${languageConfig.code}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${languageConfig.title} - Results</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { color: #2563eb; }
    .score { margin: 20px 0; padding: 15px; background: #f1f5f9; border-radius: 5px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 10px; text-left; border: 1px solid #ddd; }
    th { background: #f1f5f9; }
    .correct { color: #16a34a; font-weight: bold; }
    .incorrect { color: #dc2626; font-weight: bold; }
    .recommendation { padding: 15px; background: #e0f2fe; border-radius: 5px; margin: 20px 0; }
    .detailed-recommendation { padding: 15px; background: #f0f9ff; border-radius: 5px; margin: 20px 0; white-space: pre-line; }
    .footer { margin-top: 30px; font-size: 0.8em; color: #64748b; text-align: center; }
    ul { margin-left: 20px; }
  </style>
</head>
<body>
  <h1>${languageConfig.title} - Results</h1>
  <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

  <h2>Estimated Level: ${finalScores.estimatedLevel}</h2>

  <div class="score">
    <h3>Score Breakdown</h3>
    <p>Overall: ${finalScores.overallScore}/${finalScores.totalQuestions} (${finalScores.overallPercentage.toFixed(1)}%)</p>
    <p>2,000-word level: ${finalScores.b1Correct}/${finalScores.b1Total} (${finalScores.b1Percentage.toFixed(1)}%)</p>
    <p>3,000-word level: ${finalScores.b2Correct}/${finalScores.b2Total} (${finalScores.b2Percentage.toFixed(1)}%)</p>
    <p>Academic Words: ${finalScores.c1Correct}/${finalScores.c1Total} (${finalScores.c1Percentage.toFixed(1)}%)</p>
  </div>

  <div class="recommendation">
    <h3>Recommendation</h3>
    <p>${recommendation}</p>
  </div>

  <div class="detailed-recommendation">
    <h3>Detailed Recommendations</h3>
    <p>${detailedRecommendation}</p>
  </div>

  <h3>Answer Summary</h3>
  <table>
    <thead>
      <tr>
        <th>Question</th>
        <th>Your Answer</th>
        <th>Correct Answer</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>`

  userAnswers.forEach((answer, index) => {
    const levelQuestionNum = userAnswers.filter(
      (a) => a.level === answer.level && a.questionId <= answer.questionId,
    ).length

    content += `
      <tr>
        <td>${answer.level} #${levelQuestionNum}: ${answer.questionText}</td>
        <td>${answer.selectedAnswer}</td>
        <td>${answer.correctAnswer}</td>
        <td class="${answer.isCorrect ? "correct" : "incorrect"}">${answer.isCorrect ? "Correct" : "Incorrect"}</td>
      </tr>`
  })

  content += `
    </tbody>
  </table>

  <div class="footer">
    <p>Smart Language Learning Academy</p>
  </div>
</body>
</html>`

  // Create and trigger download
  const blob = new Blob([content], { type: "text/html" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${languageConfig.title.replace(/\s+/g, '_')}_Results_${new Date().toISOString().slice(0, 10)}.html`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

interface ResultsScreenProps {
  userAnswers: UserAnswer[]
  finalScores: FinalScores
  levelStartIndex: Record<string, number>
  onRestart: () => void
  selectedLanguage: string | null
}

export default function ResultsScreen({ userAnswers, finalScores, levelStartIndex, onRestart, selectedLanguage }: ResultsScreenProps) {
  const languageConfig = selectedLanguage ? languageConfigs[selectedLanguage] : languageConfigs.en

  const getRecommendation = () => {
    const { estimatedLevel } = finalScores
    return languageConfig.recommendations[estimatedLevel]?.short || "Focus on building your vocabulary through consistent practice and exposure to the language."
  }

  const getDetailedRecommendation = () => {
    const { estimatedLevel } = finalScores
    const rec = languageConfig.recommendations[estimatedLevel]
    if (!rec) return null

    return (
      <div className="text-left">
        <h3 className="font-semibold text-lg mb-2">{rec.detailed.title}</h3>
        <p className="mb-2">{rec.detailed.description}</p>
        <h4 className="font-semibold mt-3">{rec.detailed.focus}</h4>
        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
          {rec.detailed.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <p className="mt-3 font-semibold">{rec.detailed.tip}</p>
      </div>
    )
  }

  const getDetailedRecommendationText = () => {
    const { estimatedLevel } = finalScores
    const rec = languageConfig.recommendations[estimatedLevel]
    if (!rec) return "Focus on building your vocabulary through consistent practice and exposure to the language."

    return `${rec.detailed.title}\n\n${rec.detailed.description}\n\n${rec.detailed.focus}\n${rec.detailed.activities.map(activity => '• ' + activity).join('\n')}\n\n${rec.detailed.tip}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{languageConfig.title} - Results</h1>
          <p className="text-gray-600">Test completed successfully!</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Estimated Level: {finalScores.estimatedLevel}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{finalScores.overallScore}/{finalScores.totalQuestions}</div>
              <div className="text-sm">Overall</div>
              <div className="text-lg font-semibold">{finalScores.overallPercentage.toFixed(1)}%</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{finalScores.b1Correct}/{finalScores.b1Total}</div>
              <div className="text-sm">2,000-word level</div>
              <div className="text-lg font-semibold">{finalScores.b1Percentage.toFixed(1)}%</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{finalScores.b2Correct}/{finalScores.b2Total}</div>
              <div className="text-sm">3,000-word level</div>
              <div className="text-lg font-semibold">{finalScores.b2Percentage.toFixed(1)}%</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{finalScores.c1Correct}/{finalScores.c1Total}</div>
              <div className="text-sm">Academic Words</div>
              <div className="text-lg font-semibold">{finalScores.c1Percentage.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recommendation</h3>
          <p className="text-gray-700 text-lg">{getRecommendation()}</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Recommendations</h3>
          <div className="text-gray-700">{getDetailedRecommendation()}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Answer Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Question</th>
                  <th className="px-4 py-2 text-left">Your Answer</th>
                  <th className="px-4 py-2 text-left">Correct Answer</th>
                  <th className="px-4 py-2 text-left">Result</th>
                </tr>
              </thead>
              <tbody>
                {userAnswers.map((answer, index) => {
                  const levelQuestionNum = userAnswers.filter(
                    (a) => a.level === answer.level && a.questionId <= answer.questionId,
                  ).length

                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-2">
                        <div className="font-semibold">{answer.level} #{levelQuestionNum}</div>
                        <div className="text-sm text-gray-600">{answer.questionText}</div>
                      </td>
                      <td className="px-4 py-2">{answer.selectedAnswer}</td>
                      <td className="px-4 py-2 font-semibold text-green-600">{answer.correctAnswer}</td>
                      <td className="px-4 py-2">
                        <span className={`font-semibold ${answer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {answer.isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button
            onClick={() =>
              downloadAsText(userAnswers, finalScores, getRecommendation(), getDetailedRecommendationText(), languageConfig)
            }
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200 ease-in-out w-full sm:w-auto"
          >
            Download As Text
          </button>

          <button
            onClick={() =>
              downloadAsHTML(userAnswers, finalScores, getRecommendation(), getDetailedRecommendationText(), languageConfig)
            }
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200 ease-in-out w-full sm:w-auto"
          >
            Download As HTML
          </button>

          <button
            onClick={onRestart}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200 ease-in-out w-full sm:w-auto"
          >
            Take Test Again
          </button>
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-2">Continue your language learning journey with:</p>
          <p className="font-semibold">Smart Language Learning Academy</p>
        </div>
      </div>
    </div>
  )
}
