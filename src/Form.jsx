import React, { useState } from 'react'

const Form = ({addList}) => {
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
addList(color) 

}

  return (
    <div className="container">
      <h4>color generator</h4>
       <form onSubmit={handleSubmit} className='color-form'>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='text'
        value={color}
        placeholder='#123456'
        onChange={(e) => setColor(e.target.value)}
      />
      <button type='submit' className='btn' style={{background:color}}>submit</button>
    </form>
    </div>
   
  )
}
export default Form
