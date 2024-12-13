import React from 'react'
import Item from './Items'



const PackingList = ( {items, handleDeleteItem, handleToggleItem} ) => {
  return (
    <div className='list'>
    <ul className='list'>
      {items.map((item) => (
        <Item item={item} handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} key={item.id} />
      ))}
    </ul>
    </div>
  )
}

export default PackingList