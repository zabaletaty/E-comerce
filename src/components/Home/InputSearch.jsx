import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const [searchValue, setSearchValue] = useState("")

  


  const onSerachValueChange = (e) =>{
    setSearchValue(e.target.value)
  }


  return (
    <input 
        placeholder=''
        value={searchValue}
        onChange={onSerachValueChange}
        className="input"
      />
  )
}

export default InputSearch