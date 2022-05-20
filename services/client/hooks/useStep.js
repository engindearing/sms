import React, { useState } from 'react'

export default function useStep(initial=0) {
  const [step, setStep] = useState(initial)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return [step, setStep, nextStep, prevStep]
}