import React from 'react'

function SeparatorLine() {
  return (
    <div className="relative w-full h-1">
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-black via-green-400 to-black" />
    </div>
  )
}

export default SeparatorLine