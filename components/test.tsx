import { useRef, useState } from 'react'

// This file is For the TSX formatting
export const Welcome = () => {
  console.log('Welcome From my Doc')
}

export function isCanvasEmpty(canvas: HTMLCanvasElement | null) {
  if (!canvas) return true
  const blankCanvas = document.createElement('canvas')
  blankCanvas.width = canvas.width
  blankCanvas.height = canvas.height
  return canvas.toDataURL() === blankCanvas.toDataURL()
}
