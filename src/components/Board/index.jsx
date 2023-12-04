import {useEffect, useState} from 'react';

import Pill from './pill';
import './styles.css';
import {generate2dMatrix} from '../../utils/helper';

export default function Board() {
  const [board, setBoard] = useState(() => generate2dMatrix(20, 20));

  useEffect(() => {
    if(board){
      setBoard((prevBoard)=> {
        return prevBoard
      })
    }
  }, []);

  console.log('Board', board);
  return (
    <div className='board'>
      {board.map((row) => {
        return (
          <div key={row}>
            {row.map(({value, ...rest}) => (
              <Pill key={value} {...rest} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
