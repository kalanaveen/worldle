import React, { useState } from 'react'
import { boardDefault } from '../Words'

const Board = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div>
      board
    </div>
  )
}

export default Board
