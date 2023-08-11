import React, { useState } from 'react'
import './Css/TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <input 
    placeholder='Cortar Cebolla' 
    className='TodoSearch'
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    />
  )
}

export { TodoSearch }