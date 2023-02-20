import React, { useState } from 'react'
import MovingText from 'react-moving-text'
 
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]
 
export const AnimationChain = () => {
 
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])
 
  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(AnimationsForChaining[animationIndex+1])
  }
 
  return (
    <MovingText
    type="popOut"
    duration="2000ms"
    delay="2s"
    direction="alternate-reverse"
    timing="linear"
    iteration="infinite"
    fillMode="none"
>
    <h5>Full Stack Web Developer</h5>
</MovingText>
  )
}