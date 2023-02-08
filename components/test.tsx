import { useRef, useState } from 'react'

// This file is For the TSX formatting
export const Welcome = () => {
  console.log('Welcome From my Doc')
}
export const changeCaption = (text: string) => {
  if (!text) {
    return ''
  }
  return text
    .replace('_', '')
    .split('')
    .map((s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
    .join(' ')
}
