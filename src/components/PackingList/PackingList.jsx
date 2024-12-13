import React from 'react'
import Item from './Items'



const PackingList = ( {items, handleDeleteItem} ) => {
  return (
    <div className='list'>
    <ul className='list'>
      {items.map((item) => (
        <Item item={item} handleDeleteItem={handleDeleteItem} key={item.id} />
      ))}
    </ul>
    </div>
  )
}

export default PackingList