import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colorList }) => {
  return (
    <div className='colors'>
      {colorList.map((color) => {
        return <SingleColor key={nanoid()} color={color} />
      })}
    </div>
  )
}

export default ColorList
