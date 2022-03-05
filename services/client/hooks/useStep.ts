import React, { useState } from 'react'

export default function useStep() {
  const [step, setStep] = useState(0)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return [step, setStep, nextStep, prevStep]
}