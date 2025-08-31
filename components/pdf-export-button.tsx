"use client"

import { useState, useEffect } from "react"
import type { UserAnswer, FinalScores } from "@/types/test-types"

interface PDFExportButtonProps {
  userAnswers: UserAnswer[]
  finalScores: FinalScores
  getRecommendation: () => string
  getDetailedRecommendationText: () => string
}

export default function PDFExportButton({
  userAnswers,
  finalScores,
  getRecommendation,
  getDetailedRecommendationText,
}: PDFExportButtonProps) {
  const [exportStatus, setExportStatus] = useState<"idle" | "loading" | "exporting" | "success" | "error">("loading")
  const [jsPDFLoaded, setJsPDFLoaded] = useState(false)

  // Load jsPDF and autoTable dynamically
  useEffect(() => {
    async function loadPDFLibraries() {
      try {
        // Check if we're in a browser environment
        if (typeof window === "undefined") {
          console.error("Cannot load PDF libraries in server environment")
          setExportStatus("error")
          return
        }

        // Import libraries with better error handling
        const jspdfModule = await import("jspdf").catch((e) => {
          console.error("Failed to load jsPDF:", e)
          throw new Error("Failed to load PDF library")
        })

        const autoTableModule = await import("jspdf-autotable").catch((e) => {
          console.error("Failed to load jspdf-autotable:", e)
          throw new Error("Failed to load PDF table plugin")
        })

        // Verify the imports worked correctly
        if (!jspdfModule || !autoTableModule) {
          throw new Error("PDF libraries didn't load properly")
        }

        setJsPDFLoaded(true)
        setExportStatus("idle")
      } catch (error) {
        console.error("Failed to load PDF libraries:", error)
        setExportStatus("error")
      }
    }

    loadPDFLibraries()
  }, [])

  const exportResultsToPDF = async () => {
    if (!jsPDFLoaded) {
      console.error("PDF libraries not loaded yet")
      setExportStatus("error")
      setTimeout(() => setExportStatus("idle"), 2000)
      return
    }

    try {
      setExportStatus("exporting")

      // Import the libraries when needed with better error handling
      const jspdfModule = await import("jspdf").catch((e) => {
        console.error("Failed to load jsPDF during export:", e)
        throw new Error("Failed to load PDF library during export")
      })

      // Import autoTable to ensure it's registered as a plugin
      await import("jspdf-autotable").catch((e) => {
        console.error("Failed to load jspdf-autotable during export:", e)
        throw new Error("Failed to load PDF table plugin during export")
      })

      // Get the jsPDF constructor correctly
      const { jsPDF } = jspdfModule

      // Create a new document
      const doc = new jsPDF()

      // Check if autoTable is available
      if (typeof doc.autoTable !== "function") {
        throw new Error("PDF table plugin not loaded. Please try again.")
      }

      // PDF Content
      const pdfTitle = "German Proficiency Test (B1-C1) Results"
      const academy = "German AI Academy / LinguaThor Language Tech"
      const date = new Date().toLocaleString()

      // Title
      doc.setFontSize(18)
      doc.text(pdfTitle, 14, 20)

      // Subtitle / Info
      doc.setFontSize(10)
      doc.text(academy, 14, 26)
      doc.text(`Date: ${date}`, 14, 30)

      // Estimated Level
      doc.setFontSize(14)
      doc.text(`Estimated Level: ${finalScores.estimatedLevel || "N/A"}`, 14, 40)

      // Score Breakdown
      doc.setFontSize(12)
      doc.text("Score Breakdown:", 14, 50)
      doc.setFontSize(10)
      const scoreText = `
        Overall: ${finalScores.overallScore} / ${finalScores.totalQuestions} (${finalScores.overallPercentage.toFixed(1)}%)
        B1 Level: ${finalScores.b1Correct || 0} / ${finalScores.b1Total || 0} (${finalScores.b1Percentage.toFixed(1)}%)
        B2 Level: ${finalScores.b2Correct || 0} / ${finalScores.b2Total || 0} (${finalScores.b2Percentage.toFixed(1)}%)
        C1 Level: ${finalScores.c1Correct || 0} / ${finalScores.c1Total || 0} (${finalScores.c1Percentage.toFixed(1)}%)
      `
      const splitScoreText = doc.splitTextToSize(scoreText.trim(), 180)
      doc.text(splitScoreText, 14, 56)

      // Calculate Y position for Recommendations dynamically
      const scoreTextHeight = splitScoreText.length * 5 // Approximate height based on number of lines
      let currentY = 56 + scoreTextHeight + 10 // Start below score text + margin

      // Short Recommendation
      doc.setFontSize(12)
      doc.text("Recommendation:", 14, currentY)
      currentY += 6
      doc.setFontSize(10)
      const recommendationText = getRecommendation()
      const splitRecommendationText = doc.splitTextToSize(recommendationText, 180) // Wrap text
      doc.text(splitRecommendationText, 14, currentY)

      // Simple height calculation
      const recTextHeight = splitRecommendationText.length * 5
      currentY += recTextHeight + 10 // Update Y below recommendations

      // Detailed Recommendations
      doc.setFontSize(12)
      doc.text("Detailed Recommendations:", 14, currentY)
      currentY += 6
      doc.setFontSize(9)
      const detailedRecommendationText = getDetailedRecommendationText()
      const splitDetailedRecommendationText = doc.splitTextToSize(detailedRecommendationText, 180) // Wrap text
      doc.text(splitDetailedRecommendationText, 14, currentY)

      // Simple height calculation
      const detailedRecTextHeight = splitDetailedRecommendationText.length * 4
      currentY += detailedRecTextHeight + 10 // Update Y below detailed recommendations

      // Add German AI Academy link between detailed recommendations and answer summary
      doc.setFontSize(11)
      doc.setTextColor(0, 0, 255) // Blue color for link
      const linkText = "Das alles und noch viel mehr bekommst du hier:"
      doc.text(linkText, 14, currentY)
      currentY += 5
      doc.text("https://naturalfluentgerman.com/german-ai-academy/", 14, currentY)
      doc.setTextColor(0, 0, 0) // Reset to black
      currentY += 10 // Add space after link

      // Answer Summary Table
      doc.setFontSize(12)
      doc.text("Answer Summary:", 14, currentY - 5) // Position title above table

      const tableColumn = ["#", "Question", "Your Answer", "Correct Answer", "Result"]
      const tableRows = userAnswers.map((answer) => {
        // Find the original index relative to the full sorted list for consistent numbering
        const levelQuestionNum = userAnswers.filter(
          (a) => a.level === answer.level && a.questionId <= answer.questionId,
        ).length

        return [
          `${answer.level} #${levelQuestionNum}`,
          answer.questionText,
          answer.selectedAnswer,
          answer.correctAnswer,
          answer.isCorrect ? "Correct" : "Incorrect",
        ]
      })

      // Use autoTable plugin
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: currentY,
        theme: "grid",
        styles: { fontSize: 8, cellPadding: 1.5, overflow: "linebreak" },
        headStyles: { fillColor: [22, 160, 133], fontSize: 9 },
        columnStyles: {
          0: { cellWidth: 15, halign: "center" },
          1: { cellWidth: "auto" },
          2: { cellWidth: 30 },
          3: { cellWidth: 30 },
          4: { cellWidth: 20, halign: "center" },
        },
      })

      // Save the PDF
      const filename = `German_Test_Results_${new Date().toISOString().slice(0, 10)}.pdf`
      doc.save(filename)

      setExportStatus("success")
      setTimeout(() => setExportStatus("idle"), 2000)
    } catch (error) {
      console.error("Error generating PDF:", error)
      setExportStatus("error")
      setTimeout(() => setExportStatus("idle"), 2000)
    }
  }

  // Button text based on status
  const buttonText = {
    loading: "Loading PDF Export...",
    idle: "Export Results (PDF)",
    exporting: "Exporting...",
    success: "Export Successful!",
    error: "Export Failed - Try Again",
  }

  // Button styling based on status
  const buttonClass = `font-semibold py-2 px-6 rounded-lg shadow transition duration-200 ease-in-out ${
    exportStatus === "loading" || exportStatus === "exporting"
      ? "bg-gray-400 cursor-not-allowed"
      : exportStatus === "error"
        ? "bg-red-600 hover:bg-red-700 text-white"
        : exportStatus === "success"
          ? "bg-green-600 text-white"
          : "bg-green-600 hover:bg-green-700 text-white"
  }`

  return (
    <button
      onClick={exportResultsToPDF}
      disabled={exportStatus === "loading" || exportStatus === "exporting"}
      className={buttonClass}
    >
      {buttonText[exportStatus]}
    </button>
  )
}
