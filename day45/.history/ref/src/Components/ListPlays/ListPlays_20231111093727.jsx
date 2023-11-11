import React from 'react'

import { useSelector } from '../../Core/useSelector';
import PlayItems from '../PlayItems/PlayItems';
export default function listPlays() {
     const { state: { listPlays } } = useSelector();
     return (
          <ul className='list-plays'>
               {listPlays?.length > 0 && listPlays.map((playItems, index) =>
                    <PlayItems key={index}
                         numberPlay={index + 1}
                         playItems={playItems}

                    />)}
          </ul>
     )
}
