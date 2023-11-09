import { useState } from 'react'

import Pill from './pill'
import './styles.css'

export default function Board() {
  const [board, setBoard] = useState(() =>
    Array.from(Array(16), () => new Array(16))
  )

  return (
    <div className='board'>
      {board.map((row) => {
        return (
          <div key={row}>
            {row.map((cell) => (
              <Pill key={cell} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
