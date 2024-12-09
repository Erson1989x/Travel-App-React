import React from 'react'
import Item from './Items'
import { initialItems } from './initialItems'



const PackingList = ( {items} ) => {
  return (
    <div className='list'>
    <ul className='list'>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
    </div>
  )
}

export default PackingList